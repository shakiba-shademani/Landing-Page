export default function Subheader() {
  return (
    <div className="mt-4 pr-2 text-sm md:w-3/12 hidden md:block leading-8 font-medium">
      <ul className="text-blue-500 sticky top-20">
        <li>
          <a className="pr-2">ارسال شخصی</a>
          <ul>
            <li>
              <div>
                <span className="bg-blue-500 text-white text-[8px] rounded pt-1 px-2">
                  POST
                </span>
                <a> ارسال شخصی پیام چابک</a>
              </div>
              <ul className="mr-10">
                <li>
                  <a>
                    مثال ارسال شخصی پیام چابک به یک <br /> کاربر
                  </a>
                </li>
                <li>
                  <a>
                    مثال ارسال شخصی پیام چابک به چند <br />
                    کاربر با یک محتوا
                  </a>
                </li>
                <li>
                  <a>
                    مثال ارسال شخصی پیام چابک به چند <br />
                    کاربر با محتواهای متفاوت
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="border-b-4 border-gray-400 py-4">
                <span className="bg-blue-500 text-white text-[8px] rounded pt-1 px-2">
                  POST
                </span>
                <a> ارسال شخصی نوتیفیکیشن</a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a className="pr-2">ارسال گروهی</a>
          <ul>
            <li>
              <div>
                <span className="bg-blue-500 text-white text-[8px] rounded pt-1 px-2">
                  POST
                </span>
                <a> ارسال گروهی پیام چابک</a>
              </div>
              <ul className="mr-10">
                <li>
                  <a>مثال ارسال گروهی پیام چابک</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="border-b-4 border-gray-400 py-4">
                <span className="bg-blue-500 text-white text-[8px] rounded pt-1 px-2">
                  POST
                </span>
                <a> ارسال گروهی نوتیفیکیشن</a>
              </div>
            </li>
          </ul>
        </li>
        <li className="leading-10">
          <a>نحوه استفاده از سگمنت‌ها در API</a>
          <ul>
            <li>
              <a>شرط‌ها</a>
            </li>
            <li>
              <a>عملوند‌های مجاز (operators)</a>
            </li>
            <li>
              <a>nameهای مجاز</a>
            </li>
            <li>
              <a>نمونه</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
