import useAxios from "axios-hooks";
const useEvent = () => {
  const url = "/event";

  // create a event
  const [{ ...createEventData }, createEvent] = useAxios(
    {
      method: "POST",
      url: `${url}/createEvent`,
    },
    { manual: true }
  );
  const handleCreateEvent = async (data) => {
    return await createEvent({
      data,
    });
  };

  // get all events
  const [{ ...getEventsData }, getEvents] = useAxios(
    {
      url: `${url}/getEvent`,
      method: "GET",
    },
    { manual: true }
  );
  const handleGetEvents = async (params) => {
    return await getEvents({
      params,
    });
  };

  return {
    getEventsData,
    handleGetEvents,
    handleCreateEvent,
    createEventData,
  };
};

export default useEvent;
