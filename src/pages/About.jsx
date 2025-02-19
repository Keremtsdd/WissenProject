import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function About() {
    return (
        <div className='px-4 md:px-0 ml-0 md:ml-72 mt-16 md:mt-28'>
            <h1 className='font-bold text-2xl text-left'>HAKKIMIZDA</h1>
            <h1 className='mt-5 pb-4 text-xl font-medium text-left'>Taşdemir Rent A Car ;</h1>

            <div className='text-lg leading-relaxed space-y-4'>
                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Yurt dışından gelen ve yurt içindeki müşterilerimize kolaylık ve ayrıcalıklar sağlamakta olup, İstanbul havalimanına ücretsiz araç teslimi ve alımı yapmaktayız.</p>
                </div>

                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>İstanbul'da faaliyet gösteren firmamız araba kiralama, oto kiralama olarak adlandırılan hizmetleri ekonomik sınıftan lüks sınıfa kadar birçok otomobil, VIP ve SUV araçlarıyla sizlere en iyi kiralama hizmetini verebilmek için yoğun ve titiz bir şekilde çalışmaktadır.</p>
                </div>

                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Kiraladığınız her tür marka araçlarımız için tecrübeli ve profesyonel şoförlerimizle en kaliteli hizmeti sunuyoruz.</p>
                </div>

                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Siz değerli müşterilerimizi 7/24 İstanbul havalimanında karşılıyor ve araç teslimini sağlıyoruz.</p>
                </div>

                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Yurt içi ve yurt dışından gelen müşterilerimize transfer ayrıcalığı da sunmaktayız.</p>
                </div>

                <div className='flex items-start gap-2'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Rezervasyon sayfamızdan otomobillerin özelliklerini, fiyatlarını inceleyebilir ve kiralama ile ilgili +90 544 123 01 02 telefon numaramızdan ayrıntılı bilgilere ulaşabilirsiniz.</p>
                </div>

                <h1 className='font-medium text-left'>Taşdemir Rent A Car olarak;</h1>

                <div className='flex items-start gap-2 pb-28'>
                    <ArrowRightIcon className='mt-1' />
                    <p className='text-left w-full'>Siz değerli müşterilerimize kaliteli, konforlu ve güvenilir hizmeti sağlamak için hassasiyetle çalışıyoruz.</p>
                </div>
            </div>
        </div>
    );
}

export default About;