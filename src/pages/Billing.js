// /*!
// =========================================================
// * Muse Ant Design Dashboard - v1.0.0
// =========================================================
// * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
// * Copyright 2021 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
// * Coded by Creative Tim
// =========================================================
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */
// import {
//   Row,
//   Col,
//   Card,
//   Radio,
//   Table,
//   Progress,
//   Button,
//   Avatar,
//   Typography,
// } from "antd";

// import { Link } from "react-router-dom";

// // Images
// import ava1 from "../assets/images/logo-shopify.svg";
// import ava2 from "../assets/images/logo-atlassian.svg";
// import ava3 from "../assets/images/logo-slack.svg";
// import ava5 from "../assets/images/logo-jira.svg";
// import ava6 from "../assets/images/logo-invision.svg";
// import face from "../assets/images/face-1.jpg";
// import face2 from "../assets/images/face-2.jpg";
// import face3 from "../assets/images/face-3.jpg";
// import face4 from "../assets/images/face-4.jpg";
// import face5 from "../assets/images/face-5.jpeg";
// import face6 from "../assets/images/face-6.jpeg";
// import pencil from "../assets/images/pencil.svg";

// const { Title } = Typography;
// const columns = [
//   {
//     title: "AUTHOR",
//     dataIndex: "name",
//     key: "name",
//     width: "32%",
//   },
//   {
//     title: "FUNCTION",
//     dataIndex: "function",
//     key: "function",
//   },

//   {
//     title: "STATUS",
//     key: "status",
//     dataIndex: "status",
//   },
//   {
//     title: "EMPLOYED",
//     key: "employed",
//     dataIndex: "employed",
//   },
// ];

// const data = [
//   {
//     key: "1",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face2}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Michael John</Title>
//             <p>michael@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Manager</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/04/18</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "2",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face3}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Alexa Liras</Title>
//             <p>alexa@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Programator</Title>
//           <p>Developer</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/12/20</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "3",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Laure Perrier</Title>
//             <p>laure@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Executive</Title>
//           <p>Projects</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>03/04/21</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
//   {
//     key: "4",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face4}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Miriam Eric</Title>
//             <p>miriam@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Marketing</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button type="primary" className="tag-primary">
//           ONLINE
//         </Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>03/04/21</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
//   {
//     key: "5",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face5}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>Richard Gran</Title>
//             <p>richard@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Manager</Title>
//           <p>Organization</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>23/03/20</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "6",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar
//             className="shape-avatar"
//             shape="square"
//             size={40}
//             src={face6}
//           ></Avatar>
//           <div className="avatar-info">
//             <Title level={5}>John Levi</Title>
//             <p>john@mail.com</p>
//           </div>
//         </Avatar.Group>{" "}
//       </>
//     ),
//     function: (
//       <>
//         <div className="author-info">
//           <Title level={5}>Tester</Title>
//           <p>Developer</p>
//         </div>
//       </>
//     ),

//     status: (
//       <>
//         <Button className="tag-badge">ONLINE</Button>
//       </>
//     ),
//     employed: (
//       <>
//         <div className="ant-employed">
//           <span>14/04/17</span>
//           <a href="#pablo">Edit</a>
//         </div>
//       </>
//     ),
//   },
// ];
// // project table start
// const project = [
//   {
//     title: "COMPANIES",
//     dataIndex: "name",
//     width: "32%",
//   },
//   {
//     title: "BUDGET",
//     dataIndex: "age",
//   },
//   {
//     title: "STATUS",
//     dataIndex: "address",
//   },
//   {
//     title: "COMPLETION",
//     dataIndex: "completion",
//   },
// ];
// const dataproject = [
//   {
//     key: "1",

//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Spotify Version</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$14,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={30} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "2",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Progress Track</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$3,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={10} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "3",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}> Jira Platform Errors</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">Not Set</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">done</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={100} size="small" format={() => "done"} />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "4",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}> Launch new Mobile Tables</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$20,600</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">canceled</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress
//             percent={50}
//             size="small"
//             status="exception"
//             format={() => "50%"}
//           />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "5",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Web Dev</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$4,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">working</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={80} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },

//   {
//     key: "6",
//     name: (
//       <>
//         <Avatar.Group>
//           <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
//           <div className="avatar-info">
//             <Title level={5}>Redesign Online Store</Title>
//           </div>
//         </Avatar.Group>
//       </>
//     ),
//     age: (
//       <>
//         <div className="semibold">$2,000</div>
//       </>
//     ),
//     address: (
//       <>
//         <div className="text-sm">canceled</div>
//       </>
//     ),
//     completion: (
//       <>
//         <div className="ant-progress-project">
//           <Progress percent={0} size="small" />
//           <span>
//             <Link to="/">
//               <img src={pencil} alt="" />
//             </Link>
//           </span>
//         </div>
//       </>
//     ),
//   },
// ];

// function Tables() {
//   const onChange = (e) => console.log(`radio checked:${e.target.value}`);
//   return (
//     <>
//       <div className="tabled">
//         <Row gutter={[24, 0]}>
//           <Col xs="24" xl={24}>
//             <Card
//               bordered={false}
//               className="criclebox tablespace mb-24"
//               title="Authors Table"
//               extra={
//                 <>
//                   <Radio.Group onChange={onChange} defaultValue="a">
//                     <Radio.Button value="a">All</Radio.Button>
//                     <Radio.Button value="b">ONLINE</Radio.Button>
//                   </Radio.Group>
//                 </>
//               }
//             >
//               <div className="table-responsive">
//                 <Table
//                   columns={columns}
//                   dataSource={data}
//                   pagination={false}
//                   className="ant-border-space"
//                 />
//               </div>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }

// export default Tables;
import { Button, Table } from 'antd';
import { useState } from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}
const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
          Reload
        </Button>
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default App;