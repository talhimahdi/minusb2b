import Cover from "../components/Cover";
import RegisterForm from "../components/RegisterForm";
import Infos from "../components/Infos";

export default function Home() {
  return (
    <>
      <Cover />
      <Infos />
      <RegisterForm />
    </>
  );
}

// export async function getServerSideProps(context) {
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   fetch("https://rest.binshops.com/rest/featuredproducts", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }
