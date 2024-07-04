import useAxios from "axios-hooks";
const useEvent = () => {
  const url = "/event";

  // create a event
  const [{ ...createEventData }, createEvent] = useAxios();
  const handleCreateEvent = async (data) => {
    return await createEvent({
      method: "POST",
      url: `${url}/createEvent`,
      data,
    });
  };

  // get all events
  const [{ ...getEventsData }, getEvents] = useAxios();
  const handleGetEvents = async () => {
    return await getEvents({
      method: "GET",
      url: `${url}/getEvent`,
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
