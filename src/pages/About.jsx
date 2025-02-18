import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function About() {
    return (
        <div className='px-4 md:px-0 ml-0 md:ml-72 mt-16 md:mt-28'>
            <h1 className='font-bold text-2xl text-center md:text-left'>HAKKIMIZDA</h1>
            <h1 className='mt-5 pb-4 text-xl font-medium text-center md:text-left'>Taşdemir Rent A Car ;</h1>

            <div className='text-lg leading-relaxed'>
                <h1 className='flex items-center justify-center md:justify-start'><ArrowRightIcon /> Yurt dışından gelen ve yurt içindeki müşterilerimize kolaylık ve ayrıcalıklar sağlamakta olup, İstanbul havalimanına</h1>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>ücretsiz araç teslimi ve alımı yapmaktayız.</p>

                <h1 className='flex items-center justify-center md:justify-start'><ArrowRightIcon /> İstanbul'da faaliyet gösteren firmamız araba kiralama, oto kiralama olarak adlandırılan hizmetleri</h1>
                <p className='pl-0 md:pl-6 text-center md:text-left'>Ekonomik sınıftan lüks sınıfa kadar birçok otomobil, VIP ve SUV araçlarıyla sizlere en iyi kiralama hizmetini verebilmek için</p>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>yoğun ve titiz bir şekilde çalışmaktadır.</p>

                <h1 className='flex items-center justify-center md:justify-start pb-4'><ArrowRightIcon /> Kiraladığınız her tür marka araçlarımız için tecrübeli ve profesyonel şoförlerimizle en kaliteli hizmeti sunuyoruz.</h1>

                <h1 className='flex items-center justify-center md:justify-start pb-4'><ArrowRightIcon /> Siz değerli müşterilerimizi 7/24 İstanbul havalimanında karşılıyor ve araç teslimini sağlıyoruz.</h1>

                <h1 className='flex items-center justify-center md:justify-start pb-4'><ArrowRightIcon /> Yurt içi ve yurt dışından gelen müşterilerimize transfer ayrıcalığı da sunmaktayız.</h1>

                <h1 className='flex items-center justify-center md:justify-start'><ArrowRightIcon /> Rezervasyon sayfamızdan otomobillerin özelliklerini, fiyatlarını inceleyebilir ve kiralama ile ilgili</h1>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>+90 544 123 01 02 telefon numaramızdan ayrıntılı bilgilere ulaşabilirsiniz.</p>

                <h1 className='font-medium pb-4 text-center md:text-left'>Taşdemir Rent A Car olarak;</h1>

                <p className='pb-16 flex items-center justify-center md:justify-start mb-16'><ArrowRightIcon /> Siz değerli müşterilerimize kaliteli, konforlu ve güvenilir hizmeti sağlamak için hassasiyetle çalışıyoruz.</p>
            </div>
        </div>
    )
}

export default About;
