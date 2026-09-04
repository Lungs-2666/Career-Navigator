    import './accPrev.css';
    import Link from 'next/link';
    import TextTypeComponent from '@/components/atoms/textType/textTypeComponent';

    const AccountPreview = () => {
        return (
            <div className='account_preview'>
                <Link href="/sign-up" className='account_preview_link'> Создание аккаунта {">>"} </Link> 
                 
                <div className='account_preview_main'>
                    <h2 className='account_preview_heading'> Создай сейчас! </h2>
                    
                    <div className='account_preview_inputs'>
                        <div className='inpt_prev_1'> <TextTypeComponent text={"your_emai123l@mail.com"} /> </div>
                        <div className='inpt_prev_2'> <TextTypeComponent text={"**********"}/> </div>
                        <div className='inpt_prev_3'> <TextTypeComponent text={["Frontend", "Backend", "Designer"]} /> </div>
                        
                        <Link href="/sign-up" className='account_preview_btn'> Начать </Link>
                    </div>

                </div>
            </div>
        );
    }

    export default AccountPreview;
