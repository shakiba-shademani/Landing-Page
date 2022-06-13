import styles from "../styles/Table.module.css";

export default function ParamsTable() {
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
            <td className="text-center">
              target <font color="red">*</font>
            </td>
            <td className="text-right">ویژگی‌های گروه‌بندی</td>
            <td className="text-center">object</td>
            <td className="text-left .ltr">{`{"target":{
  "deviceType": "ios"
}}`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">channel</td>
            <td className="text-right">کانال ارسال پیام</td>
            <td className="text-center">string</td>
            <td className="text-right">default</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">
              content <font color="red">*</font>
            </td>
            <td className="text-right">متن پیام</td>
            <td className="text-center">string</td>
            <td className="text-right">سلام</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">data</td>
            <td className="text-right">دیتای پیام به صورت json</td>
            <td className="text-center">JSON</td>
            <td className="text-left .ltr">{`{"offer": "10", "discountCode": "Newapp10"}`}</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">trackId</td>
            <td className="text-right">
              تعیین شناسه ردگیری جداگانه برای رصد پیام
            </td>
            <td className="text-center">string</td>
            <td className="text-right">adp-1397-6-11</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">inApp</td>
            <td className="text-right">
              کاربران در زمان باز بودن برنامه پیام را دریافت می‌کنند
              (درون‌برنامه‌ای)
            </td>
            <td className="text-center">boolean</td>
            <td className="text-right">true</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">live</td>
            <td className="text-right">
              فقط کاربرانی که در لحظه ارسال، برنامه را باز دارند دریافت می‌کنند
              (زنده)
            </td>
            <td className="text-center">boolean</td>
            <td className="text-right">false</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">autoNotify</td>
            <td className="text-right">نمایش پیام توسط گوگل صورت می‌گیرد</td>
            <td className="text-center">boolean</td>
            <td className="text-right">false</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">useAsAlert</td>
            <td className="text-right">
              استفاده متن پیام به عنوان متن نوتیفیکیشن
            </td>
            <td className="text-center">boolean</td>
            <td className="text-right">true</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">alertText</td>
            <td className="text-right">
              استفاده از متن جداگانه برای نوتیفیکیشن
            </td>
            <td className="text-center">string</td>
            <td className="text-right">سلام خوبی</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">ttl</td>
            <td className="text-right">
              زمان انقضای پیام پس از درخواست (ثانیه)
            </td>
            <td className="text-center">number</td>
            <td className="text-right">40</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">notification</td>
            <td className="text-right">تنظیمات نوتیفیکیشن</td>
            <td className="text-center">payload</td>
            <td className="text-right">مثال در جدول زیر</td>
          </tr>
          <tr className={styles.tr}>
            <td className="text-center">silent</td>
            <td className="text-right">پیام بدون نوتیفیکیشن ارسال شود</td>
            <td className="text-center">boolean</td>
            <td className="text-right">false</td>
          </tr>
        </tbody>
      </table>

      <blockquote className="bg-red-100 border-r border-yellow-400 my-4 mx-8 py-4">
        <p className="px-4 py-4 leading-8">
          <code className="bg-green-100 text-red-500">نکته :</code> نماد{" "}
          <font color="red">*</font> در جدول پارامترها به معنی{" "}
          <strong>الزامی</strong> بودن پارامتر است و بدون آن‌ درخواست شما صورت
          نمی‌گیرد.
          <br />
        </p>
      </blockquote>

      <blockquote className="bg-red-100 border-r border-yellow-400 my-4 mx-8 py-4">
        <p className="px-4 py-4 leading-8">
          <code className="bg-green-100 text-red-500">نکته:</code> نام کانال به
          صورت پیش‌فرض به عنوان کانال عمومی (
          <code className="bg-green-100 text-red-500">public</code>) در نظر
          گرفته می‌شود و اگر شما می‌خواهید به کاربر روی کانال شخصی پوش ارسال
          کنید باید قبل از نام کانال عبارت{" "}
          <code className="bg-green-100 text-red-500">/private</code> را اضافه
          نمایید. دقت کنید که کاربر یا کاربرانی که می‌خواهید برایشان پوش ارسال
          کنید روی کانالی که می‌فرستید حتما <strong>عضو</strong> باشند.
        </p>
      </blockquote>
    </div>
  );
}
