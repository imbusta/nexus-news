import bbc from '../../../assets/bbc.png'
import nyt from '../../../assets/nyt.png'
import fox from '../../../assets/fox.png'
import cnn from '../../../assets/cnn.png'
import wp from '../../../assets/wp.png'
import nbc from '../../../assets/nbc.png'
import DUMMY_SOURCES from '../../../utils/sources.json'
import styles from './NewsSources.module.css'

import SourceLogo from './SourceLogo'

const sources = DUMMY_SOURCES.map(item => {
    if (item.name === 'bbc') {
        return {
            ...item,
            image: bbc
        }
    } else if (item.name === 'nyt') {
        return {
            ...item,
            image: nyt
        }
    } else if (item.name === 'fox') {
        return {
            ...item,
            image: fox
        }
    } else if (item.name === 'cnn') {
        return {
            ...item,
            image: cnn
        }
    } else if (item.name === 'wp') {
        return {
            ...item,
            image: wp
        }
    } else if (item.name === 'nbc') {
        return {
            ...item,
            image: nbc
        }
    }
    return ""
})

export default function NewsSources() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.liveIndicator}></div>
                {sources.map((source, index) =>
                    <div key={index} className={styles.logosContainer}>
                        <SourceLogo
                            logo={source.image}
                            display={source.display}
                            name={source.name}
                        />
                    </div>
                )}
            </div>
        </>
    )
}