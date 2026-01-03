import Logo from "./header/Logo";

export default function Footer() {
  const footerList = [
    {
      label: "Company",
      list: [
        { a: "About Us", href: "#" },
        { a: "How to work?", href: "#" },
        { a: "Populer Course", href: "#" },
        { a: "Service", href: "#" },
      ],
    },
    {
      label: "Courses",
      list: [
        { a: "Categories", href: "#" },
        { a: "Offline Course", href: "#" },
        { a: "Video Course", href: "#" },
      ],
    },
    {
      label: "Support",
      list: [
        { a: "FAQ", href: "#" },
        { a: "Help Center", href: "#" },
        { a: "Career", href: "#" },
        { a: "Privacy", href: "#" },
      ],
    },
    {
      label: "Contact Info",
      list: [
        { a: "+974-3382-0090", href: "#" },
        { a: "rkcode99@gmail.com", href: "#" },
        { a: "Qatar,Al-Doha", href: "#" },
      ],
    },
  ];
  return (
    <div className="w-full bg-primary-baige text-primary-gray text-sm mt-20 pt-15">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:justify-items-center
       w-[80%] mx-auto gap-4 lg:gap-0"
      >
        <div className="flex flex-col gap-3">
          <Logo />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy a type
            specimen book.
          </p>
        </div>

        {footerList.map((footer, index) => {
          return (
            <div key={index} className="flex flex-col gap-3">
              <label className="text-lg font-bold text-primary-black">
                {footer.label}
              </label>
              <ul className="flex flex-col gap-2">
                {footer.list.map((list, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={list.href}
                        className="link before:bg-primary-gray!"
                      >
                        {list.a}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center items-center py-6">
        <p>RKCode All Right Reserved, 2024</p>
      </div>
    </div>
  );
}
