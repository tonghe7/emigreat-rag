function stripUrl (url) {
    if (!url) {
        return ''
    } else if (url.startsWith('link')) {
        return url.replace('link://', '')
    }
    return url
}

function getFilename (url) {
    if (!url) {
        return ''
    } else if (url.startsWith('file')) {
        const chunks = url.split('/')
        return chunks[chunks.length - 1]
    }
}

function removeDuplicate (sources) {
    const seen = []
    const dedupedSources = []

    sources.forEach(
        source => {
            if (!seen.includes(source.url)) {
                seen.push(source.url)
                dedupedSources.push(source)
            }
        }
    )

    return dedupedSources
}

function groupSources (sources) {

    if (!sources) {
        return []
    }

     const groupedSources = sources.map(
        (source, index) => {
            if (!source.chunkSource && !source.url) {
                return null
            }

            const sourceUrl =  source.chunkSource || source.url

            let strippedUrl
            strippedUrl = stripUrl(sourceUrl);
            let domainName
            if (strippedUrl.startsWith('http')) {
                domainName = strippedUrl.split('/')[2]
            } else {
                strippedUrl = getFilename(strippedUrl)
                domainName = 'file'
            }
            

            return {
                url: strippedUrl,
                domain: domainName
            }
        }
    )

    const deduped = removeDuplicate(groupedSources)

    return deduped
}

export default groupSources;