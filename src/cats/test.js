const datas = [
  {
    id: "111",
    name: "kim",
    tel: "080-1111-222",
  },
  {
    id: "222",
    name: "park",
    tel: "080-1111-333",
  },
  {
    id: "333",
    name: "lee",
    tel: "080-1111-444",
  },
];

const body = {
  id: "222",
  name: "j",
};

let result;
datas.forEach((data) => {
  if (data.id === body.id) {
    data = body;
    result = data;
  }
});

console.log(result);
