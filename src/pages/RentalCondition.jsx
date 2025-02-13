import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function RentalCondition() {
    return (
        <div className='ml-72 mt-24 '>

            <h1 className='font-bold text-2xl pb-7'>KİRALAMA KOŞULLARI</h1>

            <div className='text-xl'>

                <h1 className='pb-4 font-medium'>KİRALAMA SÜRESİ</h1>

                <p className=''><KeyboardArrowRightIcon />En kısa kiralama süresi 24 saattir. Teslim gecikmelerinde her ek saat için günlük ücretin 1/3 ü alınır,</p>
                <p className='pb-4 ml-6'>Toplam 3 saati aşan gecikmelerde tam gün ücreti alınır.</p>

                <h1 className='pb-4 font-medium'>UZUN SÜRELİ KİRALAMALAR</h1>

                <p className=''><KeyboardArrowRightIcon />Uzun süreli kiralama için en az kiralama süresi 30 gündür. Özel fiyat uygulanır. Kiralama fiyatı ve koşullarına ilişkin bilgi </p>
                <p className='pb-4 ml-6'>için +90 544 123 01 02 numaramızdan Bizleri arayabilirsiniz.</p>

                <h1 className='pb-4 font-medium'>ARAÇ TESLİM ALMA - ARAÇ BIRAKMA</h1>

                <p className='pb-4'><KeyboardArrowRightIcon />24 saat kesintisiz hizmet veren  Taşdemir Oto Kiralama dilediğiniz gün ve saatte aracınızı teslim alabilirsiniz.</p>

                <h1 className='pb-4 font-medium'>SÜRÜCÜ BELGESİ - KULLANIM YAŞI</h1>

                <p className='pb-4'><KeyboardArrowRightIcon />En az  25 yaş yaşını dolmurmuş olmak ve en az 3 yıllık sürücü belgesine sahip olmak mecburiyeti vardır.</p>

                <h1 className='pb-4 font-medium'>İLAVE SÜRÜCÜ</h1>

                <p className=''><KeyboardArrowRightIcon />Kiracı dışında aracın başkası tarafından kullanılabilmesi ancak sürücü belgesi ve kullanım yaşı kurallarına uygun sürücülerin </p>
                <p className='ml-6'>geçerli kimlik ve ehliyetlerinin sözleşmeye kaydı ile mümkündür. Başka kayıt yoksa ve kazanın kaydı olmayan sürücü tarafından </p>
                <p className='pb-4 ml-6'>yapıldığı tespit edilirse sigortalar geçersiz olur.</p>

                <h1 className='pb-4 font-medium' >FİYATLARA DAHİL OLAN - OLMAYAN HUSUSLAR</h1>

                <p className=''><KeyboardArrowRightIcon />Fiyatlara araçların sınırsız kilometre kullanım hakkı, araç bakım giderleri ve kasko dahildir. Yakıt, köprü,otoyol ücretleri, trafik cezaları ile </p>
                <p className='pb-4 ml-6'>sigortalar , tek yön ücreti, araç teslim etme ve teslim alma ücretleri, bebek koltuğu gibi ekstra talepler ve Katma Değer Vergisi (KDV) fiyatlara dahil değilidir.</p>

                <p className='pb-4 ml-6 underline pl-2'><PriorityHighIcon />  OTO KİRALAMA FİYAT VE KOŞULLARI İLE TARİFEDE BELİRTİLEN ARAÇ TİPLERİNİ ÖNCEDEN HABER VERMEKSİZİN DEĞİŞTİRME HAKKINI SAKLI TUTAR.</p>

                <h1 className='pb-4 font-medium'>TRAFİK CEZALARI</h1>

                <p className=''><KeyboardArrowRightIcon />Türkiye deki trafik yasaları otoyollarda en çok 120km. , şehirlerarası yollarda 90km. ve şehiriçlerinde ise 50km. hıza izin vermektedir. </p>
                <p className='ml-6'>Park ederken PARK YASAĞI işaretlerine uyunuz. Trafik yasalarına uyulmamasından ve kiracının kusurundan doğabilecek hareketlere uygulanacak </p>
                <p className='ml-6'>trafik cezaları ve yasal sorumluluklar kiracıya aittir. Araç bırakıldıktan sonra Antalya Oto Kiralamaya ulaşan trafik cezaları kiracıya yansıtılır ve ilgili tutar </p>
                <p className='ml-6'>nakit olarak veya kredi kartı ile kiracıdan tahsil edilir. Araçların hangi nedenle olursa olsun resmi veya yerel makamlar tarafından tutulması nedeni ile geçecek </p>
                <p className='ml-6 pb-32'>zaman sözleşme süresi içinde kabul edilir.</p>
            </div>
        </div>
    )
}

export default RentalCondition