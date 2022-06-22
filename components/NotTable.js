import styles from "../styles/Table.module.css";

export default function NoteTable() {
  return (
    <div className="overflow-x-auto">
      <table className="mx-8 my-4 py-2 text-sm overflow-x-auto">
        <thead>
          <tr className={styles.tr}>
            <th>پارامترها</th>
            <th>توضیح</th>
            <th>نوع مقدار</th>
            <th>مثال</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td>
              title <font color="red">*</font>
            </td>
            <td>عنوان نوتیفیکیشن</td>
            <td>string</td>
            <td>ثبت درخواست</td>
          </tr>
          <tr className={styles.tr}>
            <td>body</td>
            <td>متن نوتیفیکیشن</td>
            <td>string</td>
            <td>سفارش شما ثبت شد</td>
          </tr>
          <tr className={styles.tr}>
            <td>groupId</td>
            <td>برای گروه‌بندی شخصی نوتیفیکیشن‌ها</td>
            <td>string</td>
            <td>news</td>
          </tr>
          <tr className={styles.tr}>
            <td>icon</td>
            <td>تصویر نوتیفیکیشن</td>
            <td>string</td>
            <td>نام تصویر</td>
          </tr>
          <tr className={styles.tr}>
            <td>sound</td>
            <td>صدای نوتیفیکیشن (به فرمت صدا دقت داشته باشید)</td>
            <td>string</td>
            <td>نام صدا</td>
          </tr>
          <tr className={styles.tr}>
            <td>clickUrl</td>
            <td>لینک هنگام کلیک</td>
            <td>string</td>
            <td>لینک</td>
          </tr>
          <tr className={styles.tr}>
            <td>ledColor</td>
            <td>تنظیم رنگ led (فقط اندروید)</td>
            <td>string</td>
            <td>کد رنگ HEX</td>
          </tr>
          <tr className={styles.tr}>
            <td>smallIcon</td>
            <td>آیکون کوچک نوتیفیکیشن (فقط اندروید)</td>
            <td>string</td>
            <td>نام آیکون</td>
          </tr>
          <tr className={styles.tr}>
            <td>actions</td>
            <td>دکمه (اکشن)</td>
            <td>array</td>
            <td>آرایه‌ای از جدول زیر</td>
          </tr>
          <tr className={styles.tr}>
            <td>mediaType</td>
            <td>نوع رسانه</td>
            <td>string</td>
            <td>jpeg</td>
          </tr>
          <tr className={styles.tr}>
            <td>mediaUrl</td>
            <td>لینک رسانه</td>
            <td>string</td>
            <td>لینک</td>
          </tr>
          <tr className={styles.tr}>
            <td>contentAvailable</td>
            <td>
              برای انجام یک آپدیت بی‌صدا در بک‌گراند یا فورگراند مقدار 1 را
              بگذارید
            </td>
            <td>boolean</td>
            <td>1</td>
          </tr>
          <tr className={styles.tr}>
            <td>mutableContent</td>
            <td>
              برای پشتیبانی از نوتیفیکیشن چندرسانه‌ای مقدار 1 را حتما قرار دهید
            </td>
            <td>boolean</td>
            <td>1</td>
          </tr>
          <tr className={styles.tr}>
            <td>category</td>
            <td>شناسه نوتیفیکیشن برای ذخیره آن</td>
            <td>string</td>
            <td>delivery</td>
          </tr>
        </tbody>
      </table>

      <table className="mx-8 mb-4 mt-24 py-2 w-11/12 text-sm overflow-x-auto">
        <thead>
          <tr className={styles.tr}>
            <th>پارامترها</th>
            <th>توضیح</th>
            <th>نوع مقدار</th>
            <th>مثال</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td>(id (action</td>
            <td>شناسه اکشن</td>
            <td>string</td>
            <td>{`forecast_action`}</td>
          </tr>
          <tr className={styles.tr}>
            <td>(title (action</td>
            <td>عنوان اکشن</td>
            <td>string</td>
            <td>پیش‌بینی کن</td>
          </tr>
          <tr className={styles.tr}>
            <td>(options (action</td>
            <td>رفتار اکشن (فقط آی‌او‌اس)</td>
            <td>number</td>
            <td>1</td>
          </tr>
          <tr className={styles.tr}>
            <td>(icon (action</td>
            <td>نام آیکون در فولدر drawable (فقط اندروید)</td>
            <td>string</td>
            <td>نام آیکون</td>
          </tr>
          <tr className={styles.tr}>
            <td>(url (action</td>
            <td>لینک مقصد یا دیپ لینک</td>
            <td>string</td>
            <td>{`starter:/detail?id=123`}</td>
          </tr>
        </tbody>
      </table>

      <blockquote className="bg-yellow-100 border-r border-yellow-400 my-8 mx-8 py-4">
        <p className="px-4 py-4 leading-8">
          <code className="bg-green-100 text-red-500">نکته :</code> نماد{" "}
          <font color="red">*</font> در جدول پارامترها به معنی{" "}
          <strong>الزامی</strong> بودن پارامتر است و بدون آن‌ درخواست شما صورت
          نمی‌گیرد.
          <br />
        </p>
      </blockquote>

      <blockquote className="bg-yellow-100 border-r border-yellow-400 my-8 mx-8 py-4">
        <p className="px-4 py-4 leading-8">
          <code className="bg-green-100 text-red-500">نکته :</code> در
          پارامترهای نوتیفیکیشن، پارامتر{" "}
          <code className="bg-green-100 text-red-500">options</code> یا همان
          رفتار اکشن (فقط در آی‌او‌اس) می‌توانید عدد ۱ برای اکشن{" "}
          <a
            className="text-blue-500"
            href="https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/unnotificationactionoptionauthenticationrequired?language=objc"
          >
            Authentication Required (اکشن در صورت قفل نبودن دستگاه اجرا می‌شود)
          </a>
          ،‌ ۲ برای اکشن{" "}
          <a
            className="text-blue-500"
            href="https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/unnotificationactionoptiondestructive?language=objc"
          >
            Destructive (اکشن تسک مخرب انجام می‌دهد)
          </a>
          ، ۴ برای اکشن{" "}
          <a
            className="text-blue-500"
            href="https://developer.apple.com/documentation/usernotifications/unnotificationactionoptions/unnotificationactionoptionforeground?language=objc"
          >
            Foreground (اکشن موجب باز شدن اپ در فورگراند می‌شود)
          </a>{" "}
          و جمع این اعداد را برای ترکیب آن‌ها با هم قرار دهید.
        </p>
      </blockquote>
    </div>
  );
}
