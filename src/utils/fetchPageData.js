import { sanityClient } from "./sanityClient";

const fetchDatafromSanity = async () => {
  const query = `
        {
          "profile": *[_type == "profile"][0],
          "projects": *[_type == "project"] | order(order asc),
          "experience": *[_type == "experience"] | order(startDate desc)
        }
      `;

  const data = await sanityClient.fetch(query);
  return { props: { pageData: data }, revalidate: 60 };
};

export default fetchDatafromSanity;
