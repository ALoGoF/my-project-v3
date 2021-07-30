import Mock from 'mockjs';

const { Random } = Mock;

let dataList = Array.apply(null, { length: 20  }).map((item, i) => {
  return Mock.mock({
    id: i,
    name: Random.cname(),
    email: '@email',
    address: Random.county(true),
  })
})
export default dataList;
