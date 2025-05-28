import React,{useState} from 'react'
import MikaAbout from '../../assets/images/mika_about.png'
import Homemain from '../../assets/images/home_main_img.png'
import NextIcon from '../../assets/icons/next_white_icon.png'
import MikaStroke from '../../assets/images/MikaPikazo_stroke.png'
import shopBackground from '../../assets/images/shop_bg.png';
import Slide1 from '../../assets/images/slide_1.jpg'
import Slide2 from '../../assets/images/slide_2.jpg'
import Slide3 from '../../assets/images/slide_3.jpg'
import product1 from '../../assets/images/product-1.png'
import product2 from '../../assets/images/product-2.png'
import product3 from '../../assets/images/product-3.png'
import Carousel from '../../components/shop_carousel';
import Exhibtion_Wallpaper from '../../assets/images/exhibition_home.png'
export default function Home(){
    const recommendProduct=[
        {
            images: [Slide1],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [Slide2],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [Slide3],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product1],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product2],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
        {
            images: [product3],
            category: 'グッズ',
            title: '「Mika Pikazo展」 クリアファイルセット Type-A',
            price: '¥  2,000(税込)',
        },
    ]

    const ExhibitionText=[
        {
            id:0,
            name:'2025 Exhition',
            sub:'日本武道館公演'
        },
        {
            id:1,
            name:'2024 Exhition',
            sub:'日本武道館公演'
        },
        {
            id:2,
            name:'2023 Exhition',
            sub:'日本武道館公演'
        },
    ]

    const [selectExhibition, isSelectExhibition] = useState(0);

    return (
        <div className='min-h-screen bg-[#080403] relative h-full'>
            <div className='bg-[#f7f7f7] min-h-screen relative h-full overflow-hidden'>
                <div className='flex justify-between relative py-20'>
                    <div className='px-10 relative w-full'>
                        <div className='text-[#080403] font-bold text-[6rem] leading-none'>MIKA</div>
                        <div className='text-[#080403] font-bold text-[6rem] leading-none'>PIKAZO</div>
                        <div className='text-[#080403] mt-20 text-[1.25rem] leading-none'>5月11日</div>
                        <div className='text-[#080403] my-2 text-[1.25rem] leading-none'>13:00~/14:00~/15:00~/16:00~</div>
                        <div className='text-[#080403] my-2 text-[1.25rem] leading-none'>【イベント情報】サイン会の開催が決定！</div>
                        <div className='text-[#080403] mt-20 text-[1.25rem] leading-none font-bold'>場所</div>
                        <div className='text-[#080403] my-2 text-[1.25rem] leading-none font-bold'>〒101-0021 東京都千代田区外神田 3-16-12アキバCOビル1F</div>
                    </div>
                    <div className='relative z-10 w-full'>
                        <div>
                            <img src={Homemain} className='object-contain'/>
                        </div>
                         <div className='absolute top-0 right-0'>
                            <div className="pt-10 text-[#F7F7F7] px-30">
                                <div className='cursor-pointer group w-fit'>
                                    <img src={NextIcon} className='object-contain mt-5 transfrom transition-transform group-hover:-translate-y-2' />
                                    <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0'>Go</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                         <div className='absolute bottom-[1%] left-[20%] z-20 '>
                            <div className='bg-[#00CEFB] py-4 px-2 text-[3.7rem] text-[#080403] w-[120%]'>〈物語〉シリーズ × Mika Pikazo</div>
                            <div className='bg-[#00CEFB] py-4 px-2 text-[1.8rem] text-[#080403]  my-10 ml-10'>〈物語〉シリーズ × Mika Pikazo</div>
                        </div>
            </div>
            <div className='min-h-screen relative h-full'>
                  <div className='relative  px-20'>
                        <div className='text-[#f7f7f7] font-bold text-7xl rotate-90 origin-bottom-left absolute left-10px -top-20px z-20'>
                            EXHIBITTIONS
                        </div>
                    </div>
                <div className='flex py-10 px-10 gap-5'>
                    <div>
                        <img src={Exhibtion_Wallpaper} className='object-contain w-full h-full'/>
                    </div>
                    <div className=''>
                        {
                            ExhibitionText.map((data,index)=>(
                                <div 
                                onClick={()=>isSelectExhibition(index)}
                                className='text-[#f7f7f7] cursor-pointer transition transition-transform duration-300 hover:text-[#FFDC22] py-5' key={data.id}>
                                    <div className='flex items-center gap-5'>
                                        <div className='w-[2.9rem] h-[0.5rem] bg-[#FFDC22]'/>
                                        <div className={`${selectExhibition === index ? 'font-bold' : 'font-normal'} text-[2.5rem]`}>
                                        {data.name}
                                        </div>
                                    </div>
                                { selectExhibition === index && (
                                    <div className='text-[1.3rem] pl-20'>{data.sub}</div>
                                )}
                                </div> 
                            ))
                            }
                    </div>
                </div>
            </div>
            <div className='relative min-h-screen bg-[#080403] relative h-full'>
                <div className='relative  px-20'>
                        <div className='text-[#f7f7f7] font-bold text-7xl rotate-90 origin-bottom-left absolute left-10px -top-20px z-20'>
                            SHOP
                        </div>
                    </div>
                 <div className="z-1 w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${shopBackground})` }}>
                    <div className='flex flex-col justify-centr items-center h-[38rem]'>
                        <div className="pt-10 text-[#F7F7F7] px-10 ">
                            <div className='text-left'>
                                イラストレーター
                            </div>
                            <div className='text-6xl font-bold'>
                                MIKA PIKAZO
                            </div>
                            <div className='mt-2 w-50 h-2 bg-[#FFDC22]'></div>
                            <div className='pt-2'>
                                オフィシャルグッズストア
                            </div>
                        </div>
                    </div>
                   <div className='bg-[#080403] relative h-full '>
                        <div className='flex flex-col items-center justify-center '>
                            <div className='w-[60%] -mt-[20%]'>
                                 <div className='h-screen py-20 flex justify-center flex-col items-center relative'>
                                    <div className='flex justify-center'>
                                        <Carousel products={recommendProduct}/> 
                                    </div>
                                </div>
                                <div className='flex pb-20'>
                                    <div className='text-[#f7f7f7] text-[1.1rem]'>
                                        [注意事項]
                                        ※お支払い方法・配送料などはSony Music Shopの規定に従います。詳細は[ご利用ガイド]をご確認ください。
                                        ※商品の出荷までに1～2週間ほど、お時間を要する場合がございます。
                                        ※お客様のご都合による返品・交換は応じかねます。
                                        ※海外への発送は行っておりません。
                                    </div>
                                    <div className="text-[#F7F7F7] w-full flex flex-col justify-center items-center">
                                        <div className='cursor-pointer group w-fit'>
                                            <img src={NextIcon} className='object-contain mt-5 transfrom transition-transform group-hover:-translate-y-2' />
                                            <div className='text-center transform translate-x-full opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0'>Go</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <div className='relative bg-[#080403] relative min-h-screen h-full'>
                <img src={MikaStroke} className='w-full h-full object-contain absolute left-0 top-0 inset-0 z-2'/>
                <div className='py-10 px-10 relative z-10'>
                    <div className='flex items-center'>
                        <div className='w-full flex justify-center'>
                            <img src={MikaAbout} className='object-contain w-[70%] h-full'/>
                        </div>
                        <div className='w-full'>
                            <div className='flex justify-between w-full items-end'>
                                <div className='text-[#FFDC22] text-[5rem] leading-none'>Mika Pikazo</div>
                                <div className='text-[#FFDC22] text-[1.25rem] '>ミカ・ピカゾ</div>
                            </div>
                            <div className='text-[#f7f7f7] text-[1.3rem] my-5 text-justify'>
                                2017年に誕生したバーチャルYouTuber「輝夜月」(2019年8月現在チャンネル登録者数99万)のキャラクターデザインをはじめ、2018年8月に開催された世界初のVRライブ「輝夜月LIVE@Zepp VR」のアートディレクション、同年10月に展開された輝夜月のオリジナルアパレルブランド"Beyond The Moon"のロゴデザイン・グッズデザイン、VOCALOID「初音ミク」の総合的なライブ・展示イベントである「マジカルミライ2018」のメインビジュアル・衣装デザイン、KAGOME企画「ナポリたん」「ミート総帥」やドワンゴ×NEXCO中日本が手がけるネットラジオ番組企画「ガールズ ラジオ デイズ」のキャラクターデザイン、「Fate/GrandOrder」ゲーム内イラスト、人気ライトノベルの装画、CDジャケットなど、幅広いジャンル、数々の作品でアートワークを手がける。 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}