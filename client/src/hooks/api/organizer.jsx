import useAxios from "axios-hooks";

const useOrganizer = () => {
  const url = "/organizer";

  const [{ ...verifyEventData }, verifyEvent] = useAxios(
    {
      method: "POST",
      url: `${url}/verify-event`,
    },
    { manual: true }
  );
  const handleVerifyEvent = async (data) => {
    return await verifyEvent({
      data,
    });
  };

  const [{ ...verifyTicketData }, verifyTicket] = useAxios(
    {
      method: "POST",
      url: `${url}/verify-ticket`,
    },
    { manual: true }
  );
  const handleVerifyTicket = async (data) => {
    return await verifyTicket({
      data,
    });
  };
  const [{ ...getEventData }, getEvent] = useAxios(
    {
      method: "GET",
      url: `${url}/event`,
    },
    { manual: true }
  );
  const handleGetEvent = async () => {
    return await getEvent();
  };

  return {
    handleGetEvent,
    getEventData,
    verifyEventData,
    handleVerifyEvent,
    handleVerifyTicket,
    verifyTicketData,
  };
};

export default useOrganizer;
