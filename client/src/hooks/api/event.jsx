import useAxios from "axios-hooks";
const useEvent = () => {
  // create a event
  const [{ ...createEventData }, createEvent] = useAxios();
  const url = "/event";
  const handleCreateEvent = async (data) => {
    return await createEvent({
      method: "POST",
      url: `${url}/createEvent`,
      data,
      
    });
  };

  return {
    handleCreateEvent,
    createEventData,
  };
};

export default useEvent;
