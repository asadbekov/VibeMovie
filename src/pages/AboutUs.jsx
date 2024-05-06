import React from 'react'
import about from "../../public/about.webp"

const AboutUs = () => {
  return (
    <div className="container mx-auto w-full max-w-7xl">
      <h1 className=" mb-7 text-3xl font-bold">Kompaniya haqida</h1>
      <img className=" mb-7 rounded-xl" src={about} alt="" width={2000} />
      <p>
        Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
        Hozirda kompaniyaning Toshkent <br /> shahrida 18 ta filiali mavjud. <br /> Taomnoma
        asosan klab sendvichlari, hot-doglar, burgerlar, lavashlar va
        donarlardan iborat. Bizning ustuvor <br />yo'nalishlarimiz - ingredientlarning
        yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va <br />
        mehmonlarning takliflariga e'tibor. <br /> Har kuni turli xil odamlar
        MaxWay-dan buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham,
        filiallar <br />sonini ham oshirishga harakat qilmoqdamiz. Har bir
        tayyorlangan taom bilan biz o'ziga xos retseptlarning <br /> tafsilotlarini
        aniqlaymiz va sizning sevimli brendingiz bo'lishda davom etish uchun
        narx va sifatning <br /> mukammal muvozanatini qidiramiz. <br />Agar siz kutilmaganda
        biz tomondan yomon xizmat yoki past sifatli pishirilgan taomga duch
        kelsangiz, bizga <br /> @maxwaymasterfood_bot manziliga murojaat qiling. Biz
        ijobiy va salbiy fikr-mulohazalarni mamnuniyat bilan <br /> qabul qilamiz.
        Mehmonning shikoyati - bu sovg'a, bu tufayli bizda o'sish uchun maqsad
        bo'ladi.
      </p>
    </div>
  );
}

export default AboutUs