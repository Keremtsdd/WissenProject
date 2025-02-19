import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function RentalCondition() {
    return (
        <div className='px-4 md:px-0 ml-0 md:ml-72 mt-16 md:mt-24'>

            <h1 className='font-bold text-2xl pb-7 text-left'>KİRALAMA KOŞULLARI</h1>

            <div className='text-lg leading-relaxed space-y-4'>

                <h1 className='pb-4 font-medium text-left'>KİRALAMA SÜRESİ</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>En kısa kiralama süresi 24 saattir.</p>
                </div>
                <p className='text-left pl-6 ml-2'>Teslim gecikmelerinde her ek saat için günlük ücretin 1/3'ü alınır, 3 saati aşan gecikmelerde tam gün ücreti alınır.</p>

                <h1 className='pb-4 font-medium text-left'>UZUN SÜRELİ KİRALAMALAR</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>En az 30 gün süreyle özel fiyat uygulanır.</p>
                </div>
                <p className='text-left pl-6 ml-2'>Detaylı bilgi için +90 544 123 01 02 numaramızdan bizi arayabilirsiniz.</p>

                <h1 className='pb-4 font-medium text-left'>ARAÇ TESLİM ALMA - ARAÇ BIRAKMA</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>24 saat hizmet veren firmamızdan dilediğiniz saatte araç teslim alabilirsiniz.</p>
                </div>

                <h1 className='pb-4 font-medium text-left'>SÜRÜCÜ BELGESİ - KULLANIM YAŞI</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>En az 25 yaşında olmak ve 3 yıllık sürücü belgesine sahip olmak gereklidir.</p>
                </div>

                <h1 className='pb-4 font-medium text-left'>İLAVE SÜRÜCÜ</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>Aracı başkası kullanacaksa, kimlik ve ehliyet bilgileri sözleşmeye eklenmelidir.</p>
                </div>
                <p className='text-left pl-6 ml-2'>Kayıtlı olmayan bir sürücü kazaya karışırsa sigortalar geçersiz olur.</p>

                <h1 className='pb-4 font-medium text-left'>FİYATLARA DAHİL OLAN - OLMAYAN HUSUSLAR</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>Araç bakımı ve kasko dahildir.</p>
                </div>
                <p className='text-left pl-6 ml-2'>Yakıt, otoyol ücretleri ve KDV dahil değildir.</p>

                <p className='text-left pl-6 underline flex items-start gap-2'>
                    <PriorityHighIcon className='mt-1' />
                    Firma, fiyat ve koşulları önceden haber vermeksizin değiştirme hakkını saklı tutar.
                </p>

                <h1 className='pb-4 font-medium text-left'>TRAFİK CEZALARI</h1>
                <div className='flex items-start gap-2'>
                    <KeyboardArrowRightIcon className='mt-1' />
                    <p className='text-left'>Trafik yasalarına uyulmaması durumunda cezalar kiracıya aittir.</p>
                </div>
                <p className='text-left pl-6 pb-28 ml-2'>Araç bırakıldıktan sonra gelen cezalar kiracıdan tahsil edilir.</p>

            </div>
        </div>
    )
}

export default RentalCondition;
