import { useState, useEffect } from 'react';

export function TwitterFollowCard ({children, userName }) {
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const storedIsFollowing = localStorage.getItem(`isFollowing_${userName}`);
        if (storedIsFollowing) {
            setIsFollowing(JSON.parse(storedIsFollowing));
        }
    }, [userName]); // Asegúrate de incluir userName en la lista de dependencias
    
    function text_truncate(str, length = 33, ending = '...') {
        if (str.length > length) {
            return str.substring(0, length - ending.length) + ending;
        } else {
            return str;
        }
    }
    
    const truncatedText = text_truncate(children, 20);
    console.log(truncatedText);   

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
        ? 'tw-followCard-button is-following' 
        : 'tw-followCard-button';

        const handleClick = () => {
            const newIsFollowing = !isFollowing;
            setIsFollowing(newIsFollowing);
            localStorage.setItem(`isFollowing_${userName}`, JSON.stringify(newIsFollowing));
        
        
    };
    

    return (
        <article className='tw-followCard'>  
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="La img de google" 
                    src={ `https://unavatar.io/${userName}` }/>
                <div className='tw-followCard-info'>
                    <strong title={children}>{truncatedText}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    );
}
