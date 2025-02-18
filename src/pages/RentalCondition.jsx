import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function RentalCondition() {
    return (
        <div className='px-4 md:px-0 ml-0 md:ml-72 mt-16 md:mt-24'>

            <h1 className='font-bold text-2xl pb-7 text-center md:text-left'>KİRALAMA KOŞULLARI</h1>

            <div className='text-lg leading-relaxed'>

                <h1 className='pb-4 font-medium text-center md:text-left'>KİRALAMA SÜRESİ</h1>
                <p className='flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> En kısa kiralama süresi 24 saattir.</p>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>Teslim gecikmelerinde her ek saat için günlük ücretin 1/3'ü alınır, 3 saati aşan gecikmelerde tam gün ücreti alınır.</p>

                <h1 className='pb-4 font-medium text-center md:text-left'>UZUN SÜRELİ KİRALAMALAR</h1>
                <p className='flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> En az 30 gün süreyle özel fiyat uygulanır.</p>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>Detaylı bilgi için +90 544 123 01 02 numaramızdan bizi arayabilirsiniz.</p>

                <h1 className='pb-4 font-medium text-center md:text-left'>ARAÇ TESLİM ALMA - ARAÇ BIRAKMA</h1>
                <p className='pb-4 flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> 24 saat hizmet veren firmamızdan dilediğiniz saatte araç teslim alabilirsiniz.</p>

                <h1 className='pb-4 font-medium text-center md:text-left'>SÜRÜCÜ BELGESİ - KULLANIM YAŞI</h1>
                <p className='pb-4 flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> En az 25 yaşında olmak ve 3 yıllık sürücü belgesine sahip olmak gereklidir.</p>

                <h1 className='pb-4 font-medium text-center md:text-left'>İLAVE SÜRÜCÜ</h1>
                <p className='flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> Aracı başkası kullanacaksa, kimlik ve ehliyet bilgileri sözleşmeye eklenmelidir.</p>
                <p className='pl-0 md:pl-6 text-center md:text-left pb-4'>Kayıtlı olmayan bir sürücü kazaya karışırsa sigortalar geçersiz olur.</p>

                <h1 className='pb-4 font-medium text-center md:text-left'>FİYATLARA DAHİL OLAN - OLMAYAN HUSUSLAR</h1>
                <p className='flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> Araç bakımı ve kasko dahildir.</p>
                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left'>Yakıt, otoyol ücretleri ve KDV dahil değildir.</p>

                <p className='pb-4 pl-0 md:pl-6 text-center md:text-left underline flex items-center justify-center md:justify-start'>
                    <PriorityHighIcon /> Firma, fiyat ve koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.
                </p>

                <h1 className='pb-4 font-medium text-center md:text-left'>TRAFİK CEZALARI</h1>
                <p className='flex items-center justify-center md:justify-start'><KeyboardArrowRightIcon /> Trafik yasalarına uyulmaması durumunda cezalar kiracıya aittir.</p>
                <p className='pl-0 md:pl-6 text-center md:text-left pb-16'>Araç bırakıldıktan sonra gelen cezalar kiracıdan tahsil edilir.</p>
            </div>
        </div>
    )
}

export default RentalCondition;
