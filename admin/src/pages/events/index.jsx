import { useEffect, useState } from "react";
import TextField from "../../components/textField";
import Switcher from "./components/switcher";
import TableContainer from "../../components/tableContainer";
import Action from "./components/action";
import useEvents from "../../hooks/api/events";
import { toast } from "react-toastify";
import moment from "moment";
import Paginate from "../../components/paginate";
import Loader from "../../components/loader";
import classnames from "classnames";

const Events = () => {
  const [search, setSearch] = useState("");
  const [searchDelay, setSearchDelay] = useState("");
  const [currentPage, setCurrenPage] = useState(1);
  const [switchSection, setSwitchSection] = useState("pending");

  const {
    handlePendingEvent,
    pendingEventData,
    handleCompletedEvent,
    completedEventData,
    handleApprovePendingEvent,
    handleRejectPendingEvent,
    approvePendingEventData,
    rejectPendingEventData,
  } = useEvents();

  useEffect(() => {
    setCurrenPage(1);
    setSearch("");
    setSearchDelay("");
  }, [switchSection]);

  useEffect(() => {
    const getPending = async () => {
      try {
        await handlePendingEvent({
          page: currentPage,
          limit: 6,
          search: searchDelay,
        });
      } catch (error) {
        if (error?.response?.data) {
          toast.error(error?.response?.data?.message);
        }
      }
    };

    const getCompleted = async () => {
      try {
        await handleCompletedEvent({
          page: currentPage,
          limit: 6,
          search: searchDelay,
        });
      } catch (error) {
        if (error?.response?.data) {
          toast.error(error?.response?.data?.message);
        }
      }
    };

    getCompleted();
    getPending();
  }, [
    currentPage,
    searchDelay,
    approvePendingEventData?.data,
    rejectPendingEventData?.data,
  ]);

  const rejectEvent = async (id) => {
    try {
      const res = await handleRejectPendingEvent(id);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const approveEvent = async (id) => {
    try {
      const res = await handleApprovePendingEvent(id);
      toast.success(res?.data?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const pendingResults = pendingEventData?.data?.results;
  const pendingEvents = pendingResults?.data?.map((event) => [
    { text: event?.name, bold: true },
    { text: moment(event?.data).format("dd-mm-yyyy") },
    { text: event?.description },
    {
      element: (
        <div className="flex  gap-[8px]">
          <Action onClick={() => approveEvent(event?.id)} />
          <Action type="reject" onClick={() => rejectEvent(event?.id)} />
        </div>
      ),
    },
  ]);

  const completedResults = completedEventData?.data?.results;
  const completedEvents = completedResults?.data?.map((event) => [
    { text: event?.name, bold: true },
    { text: moment(event?.data).format("dd-mm-yyyy") },
    { text: event?.description },
    {
      element: (
        <span
          className={classnames(
            "grid place-items-center font-medium w-[120px] h-[40px] rounded-[24px]",
            {
              "bg-[#B9F5D8] text-[#09703E] ": event?.approved === "approved",
            },
            {
              "bg-[#F7D5D5] text-[#D93030] ": event?.approved !== "approved",
            }
          )}
        >
          {event?.approved === "approved" ? "Approved" : "Rejected"}
        </span>
      ),
    },
  ]);

  return (
    <>
      {(pendingEventData?.loading ||
        completedEventData?.loading ||
        rejectPendingEventData?.loading ||
        approvePendingEventData?.loading) && <Loader />}
      <div>
        <div className="mb-[40px]">
          <h1 className="text-[20px] font-bold">Events</h1>
          <p className="text-[20px]">Approve/Reject events requests.</p>
        </div>
        <div className="flex flex-col gap-[40px] w-full">
          <div className="flex items-center justify-between">
            <Switcher onChange={setSwitchSection} />
            <div className="max-w-[364px] w-full">
              <TextField
                placeholder="Search events"
                value={search}
                onChange={(e) => setSearch(e?.target?.value)}
                onChangeDebounce={(v) => setSearchDelay(v)}
              />
            </div>
          </div>
          {switchSection !== "pending" ? (
            <div className="flex w-full flex-col gap-[32px]">
              <TableContainer
                column="32% 20% 1fr 200px"
                header={["Event Name", "Date", "Event Detail", "Status"]}
                message="No completed event."
                body={completedEvents}
              />
              <Paginate
                current={completedResults?.currentPage}
                totalItem={completedResults?.count}
                totalPage={completedResults?.totalItems}
                onChange={setCurrenPage}
              />
            </div>
          ) : (
            <div className="flex w-full flex-col gap-[32px]">
              <TableContainer
                column="30% 18% 1fr 300px"
                header={["Event Name", "Date", "Event Detail", "Action"]}
                message="No pending event."
                body={pendingEvents}
              />
              <Paginate
                current={pendingResults?.currentPage}
                totalItem={pendingResults?.count}
                totalPage={pendingResults?.totalItems}
                onChange={setCurrenPage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Events;
