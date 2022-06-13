import Subheader from "./Subheader";
import styles from "../styles/Body.module.css";
import Image from "next/image";
import lArrow from "../public/img/left-arrow.svg";
import BArrow from "../public/img/buttom-arrow.svg";
import ParamsTable from "./ParamsTable";
import NotTable from "./NotTable";
import { useState } from "react";

export default function Header() {
  const [showPrivateTable, setShowPrivateTable] = useState(false);
  const [showNotPrivateTable, setShowNotPrivateTable] = useState(false);
  const [showGroupTable, setShowGroupTable] = useState(false);
  const [showNotGroupTable, setShowNotGroupTable] = useState(false);

  return (
    <div className="flex flex-col mt-20 w-full lg:w-5/6 border-r border-gray-200">
      <div className="flex justify-between w-full lg:w-5/6 mt-4 h-20 p-4 border-b border-gray-200">
        <p className="text-4xl"> ارسال پوش</p>
        <button
          className="bg-white border-2 border-slate-700 text-slate-700
       hover:text-white hover:bg-pink-600 w-15 h-10 rounded p-2"
        >
          ویرایش
        </button>
      </div>
      <div className="flex w-full max-w-full">
        <div className="pt-4 px-8 max-w-full md:border-l md:w-9/12 border-gray-200 leading-8">
          <p className="text-justify ">
            در ایجاد تعامل با کاربر چابک علاوه بر پنل وب، API‌ هم در اختیار شما
            قرار می‌دهد. در این صفحه راهنمای استفاده صحیح و آسان برای ارسال پیام
            و نوتیفیکیشن از طریق API را با هم بررسی خواهیم کرد.
          </p>
          <p>
            <br />
          </p>
          <blockquote className="bg-red-100 border-r border-yellow-400 my-4 mx-8 py-4">
            <p className="px-4 py-4">
              <code className="bg-green-100 text-red-500">نکته:</code>
              <span className="bg-blue-100">
                برای ایجاد دسترسی (Access Token)
              </span>{" "}
              <a className="text-blue-500">راهنمای استفاده</a> را مطالعه کنید.
            </p>
          </blockquote>
          <blockquote className="bg-red-100 border-r border-yellow-400 my-4 mx-8 py-4">
            <p className="px-4 py-4 leading-8">
              <code className="bg-green-100 text-red-500">نکته:</code>
              توجه داشته باشید که <strong>پیام چابک</strong> به طور پیش‌فرض شامل{" "}
              <strong>نوتیفیکیشن</strong> هم می‌شود. برای اطلاعات بیشتر درباره
              تفاوت <strong>پیام چابک</strong> و <strong>نوتیفیکیشن</strong>{" "}
              <a className="text-blue-500" href="#سیاست-ارسال">
                این قسمت
              </a>{" "}
              را مطالعه کنید.
            </p>
          </blockquote>
          <p>
            <br />
          </p>
          <h3 className="mb-4 mt-8">
            <a className="text-2xl" href="#ارسال-شخصی">
              ارسال شخصی
            </a>
          </h3>
          <hr className="my-4" />
          <p className="mb-8 leading-8">
            این قسمت مخصوص ارسال تراکنشی یا تعامل یک به یک با کاربر است. پیام
            شخصی به شما امکان می‌دهد به یک یا چند شناسه کاربری (
            <code className="bg-gray-200 text-red-600 border-gray-500 px-2 rounded">
              userId
            </code>
            ) پوش بفرستید:
          </p>
          <div className="mb-4">
            <span className="bg-blue-500 text-white p-1 rounded">POST</span>
            <a className="text-2xl" href="#">
              {" "}
              ارسال شخصی پیام چابک
            </a>
          </div>
          <p className="mb-4 text-justify leading-8">
            برای ارسال شخصی پیام چابک می‌توانید از لینک
            <code className="bg-gray-200 text-red-600 border-gray-500 px-2 rounded break-words">
              https://sandbox.push.adpdigital.com/api/push/toUsers
            </code>
            استفاده کنید.
          </p>
          <p className="mb-4">نمونه زیر یک cURL معتبر است:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` curl -X POST `}\</span>
                <span>
                  {` "https://sandbox.push.adpdigital.com/api/push/toUsers?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{` -H "accept: application/json"`} \</span>
                <span>{` -H "Content-Type: application/json"`} \</span>
                <span>{` -d '{ `}</span>
                <span>{`"user": "USER_ID",`}</span>
                <span>{` "content": "Test webpush",`}</span>
                <span>{`"channel": "default",`}</span>
                <span>{`"data": {`}</span>
                <span>{` "key": "value1",`}</span>
                <span>{`"key2": "value2"`}</span>
                <span>{`},`}</span>
                <span>{`"notification": { `}</span>
                <span>{`"title": "عنوان نوتیفیکیشن شما", `}</span>
                <span>{` "body": "این یک متن تستی هست که بتونیم باهاش بررسی کنیم آیا بدنه نوتیفیکیشن به خوبی نمایش داده میشه یا نه!",`}</span>
                <span>{` "mediaUrl": "https://github.com/chabokpush/chabok-assets/raw/master/samples/notification/chabokpush_twitter.jpeg",`}</span>
                <span>{` "vibrate": [10, 20, 30, 40],`}</span>
                <span>{` "sound": "toy.mp3",`}</span>
                <span>{` "dir": "rtl",`}</span>
                <span>{` "color" : "#FF0000",`}</span>
                <span>{` "largeIcon": "https://raw.githubusercontent.com/chabok-io/chabok-assets/master/sdk-logo/Android.png",`}</span>
                <span>{` "chromeBadge": "https://github.com/chabokpush/chabok-assets/raw/master/chaboklogowhite.png",`}</span>
                <span>{` "actions":[{`}</span>
                <span>{` "id": "sent",`}</span>
                <span>{` "title": "Message sent",`}</span>
                <span>{` "icon":  "https://github.com/chabokpush/chabok-assets/raw/master/chaboklogowhite.png",`}</span>
                <span>{` "url": "https://www.google.com"`}</span>
                <span>{`},`}</span>
                <span>{`{ `}</span>
                <span>{`"id": "reply",`}</span>
                <span>{`"action": "reply",`}</span>
                <span>{`"title": "Reply",`}</span>
                <span>{`"icon":  "https://github.com/chabokpush/chabok-assets/raw/master/chaboklogowhite.png"`}</span>
                <span>{`}]`}</span>
                <span>{`}`}</span>
                <span>{`}'`}</span>
              </code>
            </pre>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowPrivateTable(!showPrivateTable)}
          >
            {showPrivateTable ? <Image src={BArrow} /> : <Image src={lArrow} />}
            <p className="py-4">جدول پارامتر ها</p>
          </div>
          {showPrivateTable ? <ParamsTable /> : null}

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowNotPrivateTable(!showNotPrivateTable)}
          >
            {showNotPrivateTable ? (
              <Image src={BArrow} />
            ) : (
              <Image src={lArrow} />
            )}
            <p className="py-4">جدول پارامتر های نوتیفیکیشن</p>
          </div>
          {showNotPrivateTable ? <NotTable /> : null}

          <div className="text-2xl my-4">
            <a href="#">مثال ارسال شخصی پیام چابک به یک کاربر</a>
          </div>
          <p>
            نمونه زیر یک cURL معتبر از ارسال پیام چابک به یک کاربر (با شناسه
            کاربری Test) است:
          </p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` curl -X POST `}\</span>
                <span>
                  {` "https://sandbox.push.adpdigital.com/api/push/toUsers?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{` -H "accept: application/json"`} \</span>
                <span>{` -H "Content-Type: application/json"`} \</span>
                <span>
                  {` -d "{ \"user\": \"Test\", \"content\": \"پرواز شما دچار نیم ساعت تاخیر شده است.\", \"useAsAlert\": true}" `}
                </span>
              </code>
            </pre>
          </div>
          <div className="text-2xl my-4">
            <a href="#">مثال ارسال شخصی پیام چابک به چند کاربر با یک محتوا</a>
          </div>
          <p>
            برای ارسال پیام چابک به به چند شناسه کاربری می‌توانید از روش زیر
            استفاده کنید:
          </p>
          <p className="my-2">پی‌لود:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` { `}</span>
                <span>{`"users": ["USER_1", "USER_2", "USER_3", "USER_4"],`}</span>
                <span>{`"content": "سفارش شما با موفقیت ثبت شد",`}</span>
                <span>{`"channel": "default",`}</span>
                <span>{`"notification": {`}</span>
                <span>{`"title": "چابک",`}</span>
                <span>{`"body": "سفارش ثبت شد"`}</span>
                <span>{`}`}</span>
                <span>{`}`}</span>
              </code>
            </pre>
          </div>
          <p>برای ارسال با پی‌لود بالا cURL زیر را در ترمینال اجرا کنید:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>
                  {`curl -X POST "https://sandbox.push.adpdigital.com/api/push/toUsers?access_token=<ACCESS_TOKEN>"`}
                </span>
                <span>{`-d "{ \"users\": [\"USER_1\", \"USER_2\", \"USER_3\", \"USER_4\"], \"content\": \"سفارش شما با موفقیت ثبت شد\", \"channel\": \"default\", \"notification\": { \"title\": \"چابک\", \"body\": \"سفارش ثبت شد\" } }"`}</span>
              </code>
            </pre>
          </div>
          <div className="text-2xl my-4">
            <a href="#">
              مثال ارسال شخصی پیام چابک به چند کاربر با محتواهای متفاوت
            </a>
          </div>
          <p>
            برای ارسال پیام چابک به به چند شناسه کاربری با محتواهای متفاوت
            می‌توانید از روش زیر استفاده کنید:
          </p>
          <p className="my-2">پی‌لود:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` [ `}</span>
                <span>{`{`}</span>
                <span>{`"user": "USER_1",`}</span>
                <span>{`"content": "سفارش شما با موفقیت ثبت شد",`}</span>
                <span>{`"channel": "default",`}</span>
                <span>{`"notification": {`}</span>
                <span>{`"title": "چابک",`}</span>
                <span>{`"body": "سفارش ثبت شد"`}</span>
                <span> {`}`}</span>
                <span>{`},`}</span>
                <span>{`"user": "USER_2",`}</span>
                <span>{`"content": "سفارش شما با موفقیت ثبت شد",`}</span>
                <span>{`"channel": "default",`}</span>
                <span>{`"notification": {`}</span>
                <span>{`"title": "چابک",`}</span>
                <span>{` "body": "سفارش ثبت شد"`}</span>
                <span>{`}`}</span>
                <span>{`},`}</span>
                <span>{`{`}</span>
                <span>{` "user": "USER_2",`}</span>
                <span>{`"content": "سفارش شما با موفقیت ثبت شد",`}</span>
                <span>{`"channel": "default",`}</span>
                <span>{`"notification": {`}</span>
                <span>{`"title": "چابک",`}</span>
                <span>{` "body": "سفارش ثبت شد"`}</span>
                <span>{`}`}</span>
                <span>{`}`}</span>
                <span>{`]`}</span>
              </code>
            </pre>
          </div>
          <p>برای ارسال با پی‌لود بالا cURL زیر را در ترمینال اجرا کنید:</p>

          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{`curl -X POST "https://sandbox.push.adpdigital.com/api/push/toUsers?access_token=<ACCESS_TOKEN>" -H "accept: application/json" -H "Content-Type: application/json" \ `}</span>
                <span>{`-d [ "{ \"user\": \"USER_1\", \"content\": \"سفارش شما با موفقیت ثبت شد\", \"channel\": \"default\", \"notification\": { \"title\": \"چابک\", \"body\": \"سفارش ثبت شد\" } }, { \"user\": \"USER_2\", \"content\": \"سفارش شما با موفقیت ثبت شد\", \"channel\": \"default\", \"notification\": { \"title\": \"چابک\", \"body\": \"سفارش ثبت شد\" } }, { \"user\": \"USER_2\", \"content\": \"سفارش شما با موفقیت ثبت شد\", \"channel\": \"default\", \"notification\": { \"title\": \"چابک\", \"body\": \"سفارش ثبت شد\" } }" ]`}</span>
              </code>
            </pre>
          </div>

          <div className="mb-4 mt-12">
            <span className="bg-blue-500 text-white p-1 rounded">POST</span>
            <a className="text-2xl" href="#">
              {" "}
              ارسال شخصی نوتیفیکیشن
            </a>
          </div>

          <p className="mb-4 text-justify leading-8">
            برای ارسال شخصی نوتیفیکیشن می‌توانید از لینک{" "}
            <code className="bg-gray-200 text-red-600 border-gray-500 px-2 rounded break-words">
              https://sandbox.push.adpdigital.com/api/push/notifyUsers
            </code>{" "}
            استفاده کنید.
          </p>
          <p className="mb-4">نمونه زیر یک cURL معتبر است:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{`curl -X POST`}\</span>
                <span>
                  {`"https://sandbox.push.adpdigital.com/api/push/notifyUsers?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{`-H "accept: application/json"`}\</span>
                <span>{`-H "Content-Type: application/json"`}\</span>
                <span>{`-d "{\"segment\": { \"all\": [ { \"name\": \"deviceType\", \"operator\": \"include\", \"value\": [ \"android\", \"ios\" ] }, { \"name\": \"tags\" `}</span>
              </code>
            </pre>
          </div>
          <blockquote className="bg-red-100 border-r border-yellow-400 my-8 mx-8 py-4">
            <p className="px-4 py-4">
              <code className="bg-green-100 text-red-500"> نکته:</code> متد
              ارسال نوتیفیکیشن پی‌لودهای ارسال پیام چابک را پشتیبانی می‌کند،
              بنابراین می‌توانید از مثال‌های آن استفاده کنید و فقط کافیست متد را
              از <code className="text-red-800 bg-white">byQuery</code> به{" "}
              <code className="text-red-800 bg-white">notifyUsers</code> تغییر
              دهید.
            </p>
          </blockquote>

          <div className="text-2xl mt-16">
            <a href="#">ارسال گروهی</a>
          </div>
          <p>
            این قسمت مخصوص ارسال گروهی یا اجرای کمپین است. پیام گروهی به شما
            امکان می‌دهد به یک سگمنتی (سگمنت‌ آی‌دی یا فیلترهای سگمنت) پوش
            بفرستید:
          </p>
          <p>
            برای مشاهده نحوه استفاده از{" "}
            <a href="" className="text-blue-500">
              سگمنت
            </a>{" "}
            اینجا را مطالعه کنید.
          </p>
          <div className="my-8">
            <span className="bg-blue-500 text-white p-1 rounded">POST</span>
            <a className="text-2xl" href="#">
              {" "}
              ارسال گروهی پیام چابک
            </a>
          </div>
          <p className="mb-4 text-justify leading-8">
            برای ارسال گروهی پیام چابک می‌توانید از لینک
            <code className="bg-gray-200 text-red-600 border-gray-500 px-2 rounded break-words">
              https://sandbox.push.adpdigital.com/api/push/byQuery
            </code>
            استفاده کنید.
          </p>
          <p className="mb-4">نمونه زیر یک cURL معتبر است:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` curl -X POST `}\</span>
                <span>
                  {` "https://sandbox.push.adpdigital.com/api/push/toUsers?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{` -H "accept: application/json"`} \</span>
                <span>{` -H "Content-Type: application/json"`} \</span>
                <span>{`-d "{\"segment\": { \"all\": [ { \"name\": \"deviceType\", \"operator\": \"include\", \"value\": [ \"android\", \"ios\" ] }, { \"name\": \"tags\", \"operator\": \"include\", \"value\": [ \"FEMALE\" ] }, { \"name\": \"purchase.count\", \"operator\": \"greater_than\", \"value\": 1 } ] },\"content\": \"خریدهای عیدتان را از همین الان شروع کنید!\",\"useAsAlert\": \"true\"}"`}</span>
              </code>
            </pre>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowGroupTable(!showGroupTable)}
          >
            {showGroupTable ? <Image src={BArrow} /> : <Image src={lArrow} />}
            <p className="py-4">جدول پارامتر ها</p>
          </div>
          {showGroupTable ? <ParamsTable /> : null}

          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowNotGroupTable(!showNotGroupTable)}
          >
            {showNotGroupTable ? (
              <Image src={BArrow} />
            ) : (
              <Image src={lArrow} />
            )}
            <p className="py-4">جدول پارامتر های نوتیفیکیشن</p>
          </div>
          {showNotGroupTable ? <NotTable /> : null}

          <div className="text-2xl mt-8">
            <a>مثال ارسال گروهی پیام چابک</a>
          </div>
          <p>
            نمونه زیر یک cURL معتبر از ارسال پیام چابک گروهی است. گروه مخاطب این
            پیام، خانم‌هایی هستند که بیش از یک بار خرید داشته‌اند و از موبایل
            (دستگاه‌های اندروید و آی‌اواس) استفاده می‌کنند.
          </p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` curl -X POST `}\</span>
                <span>
                  {`"https://sandbox.push.adpdigital.com/api/push/byQuery?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{`-H "accept: application/json"`} \</span>
                <span>{`-H "Content-Type: application/json"`} \</span>
                <span>{`-d "{\"segment\": { \"all\": [ { \"name\": \"deviceType\", \"operator\": \"include\", \"value\": [ \"android\", \"ios\" ] }, { \"name\": \"tags\", \"operator\": \"include\", \"value\": [ \"FEMALE\" ] }, { \"name\": \"purchase.count\", \"operator\": \"greater_than\", \"value\": 1 } ] },\"content\": \"خریدهای عیدتان را از همین الان شروع کنید!\",\"useAsAlert\": \"true\"}"`}</span>
              </code>
            </pre>
          </div>

          <div className="mb-4 mt-12">
            <span className="bg-blue-500 text-white p-1 rounded">POST</span>
            <a className="text-2xl" href="#">
              {" "}
              ارسال گروهی نوتیفیکیشن
            </a>
          </div>

          <p className="mb-4 text-justify leading-8">
            برای ارسال گروهی نوتیفیکیشن می‌توانید از لینک{" "}
            <code className="bg-gray-200 text-red-600 border-gray-500 px-2 rounded break-words">
              https://sandbox.push.adpdigital.com/api/push/notifyUsers
            </code>{" "}
            استفاده کنید.
          </p>
          <p className="mb-4">نمونه زیر یک cURL معتبر است:</p>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span>{` curl -X POST `}\</span>
                <span>
                  {`"https://sandbox.push.adpdigital.com/api/push/notifyUsers?access_token=<ACCESS_TOKEN>"`}
                  \
                </span>
                <span>{`-H "accept: application/json"`} \</span>
                <span>{`-H "Content-Type: application/json"`} \</span>
                <span>{`-d "{\"segment\": { \"all\": [ { \"name\": \"deviceType\", \"operator\": \"include\", \"value\": [ \"android\", \"ios\" ] }, { \"name\": \"tags\", \"operator\": \"include\", \"value\": [ \"FEMALE\" ] }, { \"name\": \"purchase.count\", \"operator\": \"greater_than\", \"value\": 1 } ] },\"content\": \"خریدهای عیدتان را از همین الان شروع کنید!\",\"useAsAlert\": \"true\"}"`}</span>
              </code>
            </pre>
          </div>
          <blockquote className="bg-red-100 border-r border-yellow-400 my-8 mx-8 py-4">
            <p className="px-4 py-4">
              <code className="bg-green-100 text-red-500"> نکته:</code> متد
              ارسال نوتیفیکیشن پی‌لودهای ارسال پیام چابک را پشتیبانی می‌کند،
              بنابراین می‌توانید از مثال‌های آن استفاده کنید و فقط کافیست متد را
              از <code className="text-red-800 bg-white">byQuery</code> به{" "}
              <code className="text-red-800 bg-white">notifyUsers</code> تغییر
              دهید.
            </p>
          </blockquote>

          <div className="text-3xl mb-4 mt-24">
            <a>نحوه استفاده از سگمنت ها در API</a>
          </div>
          <p className="mb-8">
            هر سگمنت می‌تواند شامل یک یا چند شرط (<strong>rule</strong>) باشد.
          </p>
          <div className="text-2xl mb-4">
            <a>شرط ها</a>
          </div>
          <p>هر شرط شامل ۳ قسمت اصلی می‌باشد:</p>
          <ul className="list-disc my-4 mr-6">
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  name
                </code>
                : نام فیلد
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  operator
                </code>
                : نوع عملوند (مانند بزرگتر، مساوی‌ با و غیره)
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  value
                </code>
                : مقداری که سنجش می‌شود
              </p>
            </li>
          </ul>
          <div className="text-2xl my-4">
            <a> عملوند های مجاز(operators)</a>
          </div>
          <ul className="list-disc mr-6">
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  equal_to
                </code>
                : برابر با
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  not_equal
                </code>
                : برابر نباشد با
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  lesser_than
                </code>
                : کوچکتر از
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  lesser_equals
                </code>
                : کوچکتر مساوی
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  greater_than
                </code>
                : بزرگتر از
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  greater_equals
                </code>
                : بزرگتر مساوی
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  include
                </code>
                : یکی از
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  not_include
                </code>
                : هیچکدام از
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  before
                </code>
                : قبل از
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1">
                  after
                </code>
                : بعد از
              </p>
            </li>
          </ul>
          <blockquote className="bg-red-100 border-r border-yellow-400 my-8 mx-8 py-4">
            <p className="px-4 py-4">
              <code className="bg-green-100 text-red-500">نکته:</code>{" "}
              عملوند‌های{" "}
              <code className="bg-green-100 text-red-500">before</code> و{" "}
              <code className="bg-green-100 text-red-500">after</code> مخصوص
              فیلد‌هایی از جنس زمان هستند، و مقداری که در قسمت{" "}
              <code className="bg-green-100 text-red-500">value</code> این نوع
              شرط‌ها قرار میگیرد به صورت{" "}
              <code className="bg-green-100 text-red-500">xh</code> می‌باشد.
              نمونه:{" "}
              <code className="bg-green-100 text-red-500">'value: '6h</code>.
            </p>
          </blockquote>
          <div className="text-2xl mb-4">
            <a>nameهای مجاز</a>
          </div>
          <ul className="list-disc my-4 mr-6">
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  installDate
                </code>
                : زمان اولین بازدید
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  launchTime
                </code>
                : زمان آخرین بازدید
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  launchCount
                </code>
                : تعداد بازدید
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  tags
                </code>
                : تگ‌های کاربر
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  deviceType
                </code>
                : نوع دستگاه
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  clientVersion
                </code>
                : نسخه برنامه
              </p>
            </li>
            <li className="mb-8">
              <p>
                <code className="bg-gray-200 text-red-700 rounded p-1 ">
                  osVersion
                </code>
                : نسخه سیستم‌عامل
              </p>
            </li>
          </ul>
          <p className="px-4 mb-8">
            مثال زیر کاربرانی را هدف قرار می‌دهد که{" "}
            <strong>بعد از ۶ ساعت پیش</strong>، برنامه‌ را نصب کرده‌اند و{" "}
            <strong>بیش از ۲ بار</strong> هم آن را باز نموده‌اند:
          </p>
          <div className="text-2xl mb-4 px-4">
            <a>نمونه</a>
          </div>
          <div className={styles.ltr}>
            <pre className=" flex bg-gray-200 mb-4 mx-8 my-4 py-2 overflow-auto text-sm leading-6">
              <code className={styles.counter}>
                <span> {` "segment": {`}</span>
                <span>{`"all": [`}</span>
                <span>{`{`}</span>
                <span>{`"name": "installDate",`}</span>
                <span>{`"operator": "after",`}</span>
                <span>{`"value": "6h"`}</span>
                <span>{`},`}</span>
                <span>{`{`}</span>
                <span>{`"name": "launchCount",`}</span>
                <span>{` "operator": "greater_than",`}</span>
                <span>{`  "value": 2`}</span>
                <span>{`}`}</span>
                <span>{`]`}</span>
                <span>{`}`}</span>
              </code>
            </pre>
          </div>
          <hr className="px-4 my-4" />
          <div className="mx-8 py-4 mb-12 flex justify-between text-blue-500">
            <a className="" href="/rest-api/guide.html">
              → قبلی{" "}
            </a>
            <a className="" href="/rest-api/add-tag.html">
              بعدی ←
            </a>
          </div>
        </div>
        <Subheader />
      </div>
    </div>
  );
}
