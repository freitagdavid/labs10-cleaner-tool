import styled from '@emotion/styled';

export const ModalContainer = styled.div`
 
    height: 100%;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    position: fixed; 
    z-index: 1;
    left: 0;
    top: 0;
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0, 0.4); 
    overflow-x: hidden; 
    .modal-content-container{
        
        width:450px;
        display:flex;
        flex-direction:column;
        background-color:var(--color-bg-secondary);
      
       
 }
`
export const SurveySelectButton = styled.button`
    opacity: 1;
    max-width: 200px;
    width: 150px;
    max-height: 60px;
    height: auto;
    padding: 0.5rem 1rem;
    border: 0;
    border: 1px solid var(${props=>(props.theme.text)});
    border-radius: var(--border-radius);
    font-weight: normal;
    font-size: 1rem;
    background: var(--color-accent);
    color: var(--color-button-text);
    background: var(${props=>(props.theme.bg)});
    color: var(${props=>(props.theme.text)});
    outline:none;
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 5px;
    border: 1.5px solid #428acb;
    ${(props:any)=>(props.type === "null" ? `
    background: white;
    color: #428acb;
    border: 1.5px solid #428acb ` :
    null)}
`;

export const ModalH3 = styled('h3')`
    margin-top: 5px;
    font-size: 20px;
`;