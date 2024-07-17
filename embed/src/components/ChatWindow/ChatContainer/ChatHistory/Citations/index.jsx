import { ArrowSquareOut } from "@phosphor-icons/react";
import groupSources from '@/utils/groupSources';

export const Citations = ({ sources }) => {
    console.log(sources)
    if (!sources) return null;
    if (sources.length === 0) return null;
    
    const groupedSources = groupSources(sources)
    if (!groupedSources) return null;
    if (groupedSources.length === 0) return null;

    return (<>
        <hr />
        <span className="allm-text-sm">Souces:</span>
        <ul className="allm-flex allm-flex-col allm-text-sm">{
            groupedSources.map((source, index) => {
                if (source.domain === 'file') {
                    return (<li>
                        {source.url}
                    </li>)
                } else {
                    return (
                        <li>
                            <a href={source.url} target="_blank">
                            {source.domain}
                            </a>
                            <ArrowSquareOut className="allm-h-4 allm-w-4 allm-ml-2 allm-inline-block" />
                        </li>
                    );
                }
                
            })
        }</ul>
        </>
    );
}