import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useColorMode } from '@docusaurus/theme-common';

export default function Figure({lightImageSrc, darkImageSrc, caption}) {
    const { isDarkTheme } = useColorMode();

    return (
        <figure style={{padding: 20}}>
            <img src={isDarkTheme ? useBaseUrl(darkImageSrc) : useBaseUrl(lightImageSrc)} alt={caption}/>
            <figcaption style={{textAlign: 'center', fontWeight: 200, marginTop: '1rem'}}>{`Figure: ${caption}`}</figcaption>
        </figure>
    )
}
