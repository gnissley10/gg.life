
//
// Tick component for month breakdown
//
export default function Tick(props) {

    // Up tick
    if (props.direction == "up") {  
        return(
            <svg 
                className={props.styleClass}   
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  
                <polyline points="7 11 12 6 17 11" />  
                <polyline points="7 17 12 12 17 17" />
            </svg>
        );
    }

    // Down tick
    if (props.direction == "down") {  
        return(
            <svg 
                className={props.styleClass}  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"  
                strokeWidth="2"  
                strokeLinecap="round"  
                strokeLinejoin="round">  
                <polyline points="7 13 12 18 17 13" />  
                <polyline points="7 6 12 11 17 6" />
            </svg>
        )
    }

    if (props.direction == 'line'){
        return (
            <svg 
                className={props.styleClass} 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round">  
                <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="5" y1="12" x2="19" y2="12" /></svg>
        )
    }
}