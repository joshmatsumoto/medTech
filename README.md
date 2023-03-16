# medTech
Don't let bootcamp kill you, come to medTech! We have created a resource that can connect bootcamp students with doctors to alleviate your pain, stress, and overall declining mental health!

# Table of Contents
- [medTech](#medtech)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Github Account](#github-account)
- [Contacts](#contacts)
- [Code Snippets](#code-snippets)
- [Resources](#resources)


# Description
MedTech is an innovative application designed specifically for hospital use, providing a comprehensive solution for the management of internal operations. With MedTech, hospitals can streamline their workflows, increase efficiency, and improve patient outcomes. The application features a user-friendly interface that enables hospital staff to easily manage patient information, track medical supplies, schedule appointments, and access critical patient data in real-time. MedTech also includes powerful analytics and reporting tools, allowing hospital administrators to gain valuable insights into their operations and make informed decisions. The application is secure, with robust data encryption and access controls, ensuring that patient data remains confidential and protected at all times. MedTech is the ideal solution for hospitals seeking to improve their internal operations and provide better care to their patients

# Installation Instructions
To run the application type the following command:
- Run `npm i` on client, server side and the root directory
- In the root directory run  `npm run develop`

# Github Account
Team Members:
  - [Josh Matsumoto](https://github.com/joshmatsumoto)
  - [Solomon Santos](https://github.com/captaiiinsolo)
  - [Edwin Hernandez](https://github.com/EdwinHdz04)
  - [Ashley Sese](https://github.com/ashrean)

- [Deployed Link](https://ucbvirtfsfft1-8fx2960.slack.com//medtech.herokuapp.com)



# Contacts
LinkedIn Accounts:
- [Josh Matsumoto](https://www.linkedin.com/in/joshua-matsumoto-7629ab259/)
- [Solomon Santos](https://www.linkedin.com/in/solomon-santos/)
- [Edwin Hernandez](https://www.linkedin.com/in/edwin-hernandez-0294aa13/)
- [Ashley Sese](https://www.linkedin.com/in/ashleyrean/)

# Code Snippets
```import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AdminBtn from '../components/Buttons/AdminLoginBtn';
import  DocBtn from '../components/Buttons/DocLoginBtn';
import SafetyTips from '../components/SafetyTips/SafetyTips';


const Home = () => {

    return (
        <>
             <Header/>
             <div>
            <SafetyTips/>

             </div>
             <PatientLogin/>

             <div className='d-flex justify-content-center gap-3'>
             <DocBtn/>

             <AdminBtn/>
             </div>

             <Footer/>
      </>
     );
};


export default Home;
```

# Resources
-[React-Bootstrap](https://react-bootstrap.github.io/)
-[Stackoverflow](https://stackoverflow.com)
-[GeeksforGeeks](https://www.geeksforgeeks.org/)
