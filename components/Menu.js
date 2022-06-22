export default function Menu() {
  return (
    <div className="md:flex">
      <ul className="md:flex md:ml-72 md:items-center md:justify-around">
        <li className="hover:text-pink-600">
          <a href="https://chabok.io/docs.html">مستندات</a>
        </li>
        <li className="md:mr-14 hover:text-pink-600">
          <a href="https://chabok.io/contact.html">تماس با ما</a>
        </li>
      </ul>

      <ul className="md:flex md:items-center md:p-2">
        <li>
          <a href="http://panel.push.adpdigital.com/login">ورود</a>
        </li>
        <li className="md:pr-4">
          <a
            className=" bg-slate-700 hover:bg-slate-900
        text-white hover:text-pink-600 font-bold ml-40 w-15 h-10 p-3 rounded-3xl"
            href="https://chabok.io/demo.html"
          >
            درخواست دمو
          </a>
        </li>
      </ul>
    </div>
  );
}
