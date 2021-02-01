const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getDummyBoards = async () => {
  await sleep(500);

  return [
    {
      id: 1,
      title: "1",
      content: "content",
    },
    {
      id: 2,
      title: "2",
      content: "content",
    },
    {
      id: 3,
      title: "3",
      content: "content",
    },
    {
      id: 4,
      title: "4",
      content: "content2",
    },
    {
      id: 5,
      title: "5",
      content: "content",
    },
    {
      id: 6,
      title: "6",
      content: "content2",
    },
  ];
};
