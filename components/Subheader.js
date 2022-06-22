export default function Subheader() {
  return (
    <div className="mt-4 pr-2 text-sm md:w-3/12 hidden md:block leading-8 font-medium">
      <ul className="text-slate-700 sticky top-20">
        <li>
          <a className="pr-2 cursor-pointer" href="#privateSend">ارسال شخصی</a>
          <ul>
            <li>
              <div>
                <span className="bg-yellow-300 text-black font-bold text-xs rounded pt-1 px-2">
                  POST
                </span>
                <a className="cursor-pointer" href="#pSendMessage"> ارسال شخصی پیام چابک</a>
              </div>
              <ul className="mr-10">
                <li>
                  <a className="cursor-pointer" href="#pSendMessageOne">
                    مثال ارسال شخصی پیام چابک به یک کاربر
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#pSendMessageTwo">
                    مثال ارسال شخصی پیام چابک به چند 
                    کاربر با یک محتوا
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" href="#pSendMessageThree">
                    مثال ارسال شخصی پیام چابک به چند 
                    کاربر با محتواهای متفاوت
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div className="border-b-4 border-gray-400 py-4">
                <span className="bg-yellow-300 text-black font-bold text-xs rounded pt-1 px-2">
                  POST
                </span>
                <a className="cursor-pointer" href="#pSendMessageNot"> ارسال شخصی نوتیفیکیشن</a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <a  className="pr-2 cursor-pointer" href="#groupSend">ارسال گروهی</a>
          <ul>
            <li>
              <div>
                <span className="bg-yellow-300 text-black font-bold text-xs rounded pt-1 px-2">
                  POST
                </span>
                <a className="cursor-pointer" href="#gSendMessage"> ارسال گروهی پیام چابک</a>
              </div>
              <ul className="mr-10">
                <li>
                  <a className="cursor-pointer" href="#gSendMessageOne">مثال ارسال گروهی پیام چابک</a>
                </li>
              </ul>
            </li>
            <li>
              <div className="border-b-4 border-gray-400 py-4">
                <span className="bg-yellow-300 text-black font-bold text-xs rounded pt-1 px-2">
                  POST
                </span>
                <a className="cursor-pointer" href="#gSendMessageNot"> ارسال گروهی نوتیفیکیشن</a>
              </div>
            </li>
          </ul>
        </li>
        <li className="leading-10">
          <a className="cursor-pointer" href="#API">نحوه استفاده از سگمنت‌ها در API</a>
          <ul>
            <li>
              <a className="cursor-pointer" href="#conditions">شرط‌ها</a>
            </li>
            <li>
              <a className="cursor-pointer" href="#operators">عملوند‌های مجاز (operators)</a>
            </li>
            <li>
              <a className="cursor-pointer" href="#names">nameهای مجاز</a>
            </li>
            <li>
              <a className="cursor-pointer" href="#ex">نمونه</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
