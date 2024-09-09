import useAxios from "axios-hooks";

const useEvents = () => {
  const [{ ...pendingEventData }, pendingEvent] = useAxios(
    {
      url: "/admin/events/pending",
      method: "GET",
    },
    { manual: true }
  );
  const handlePendingEvent = async (params) => {
    return await pendingEvent({
      params,
    });
  };

  const [{ ...completedEventData }, completedEvent] = useAxios(
    {
      url: "/admin/events/completed",
      method: "GET",
    },
    { manual: true }
  );
  const handleCompletedEvent = async (params) => {
    return await completedEvent({
      params,
    });
  };

  const [{ ...rejectPendingEventData }, rejectPendingEvent] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const handleRejectPendingEvent = async (id) => {
    return await rejectPendingEvent({
      url: `/admin/events/pending/${id}/reject`,
    });
  };

  const [{ ...approvePendingEventData }, approvePendingEvent] = useAxios(
    {
      method: "POST",
    },
    { manual: true }
  );
  const handleApprovePendingEvent = async (id) => {
    return await approvePendingEvent({
      url: `/admin/events/pending/${id}/approve`,
    });
  };

  return {
    handleApprovePendingEvent,
    approvePendingEventData,
    handleRejectPendingEvent,
    rejectPendingEventData,
    pendingEventData,
    handlePendingEvent,
    handleCompletedEvent,
    completedEventData,
  };
};

export default useEvents;
