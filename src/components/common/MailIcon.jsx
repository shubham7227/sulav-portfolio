import { CiMail } from "react-icons/ci";

const MailIcon = () => {
  return (
    <div className="md:hidden block fixed bottom-5 right-5 z-50">
      <a href="mailto:girishubham77@gmail.com">
        <div className="rounded-xl bg-backgroundSecondary shadow-md p-2">
          <CiMail className="text-primary text-[2rem]" />
        </div>
      </a>
    </div>
  );
};

export default MailIcon;
