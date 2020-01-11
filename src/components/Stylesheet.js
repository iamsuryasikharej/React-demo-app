import React from 'react'
import './MyStyles.css'
import styles from './Mynewstyle.module.css'
function Stylesheet(props) {
    var nam = props.name ? '' :'primaryx'
    var lol='primaryy'
    return (
        <div>
            <h1 className={`${nam} ${lol}`}>Hello</h1>
            <h2 className={styles.x}>Halo</h2>
        </div>
    )
}

export default Stylesheet
