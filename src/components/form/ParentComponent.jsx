// import React from 'react';
// import MyForm from './MyForm';

// class ParentComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formData: {
//         firstName: '',
//         lastName: '',
//       },
//     };
//   } 

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       formData: {
//         ...this.state.formData,
//         [name]: value,
//       },
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state.formData);
//   };

//   render() {
//     return (
//       <div>
//         <h1>My Form</h1>
//         <MyForm
//           formData={this.state.formData}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//       </div>
//     );
//   }
// }

// export default ParentComponent;
