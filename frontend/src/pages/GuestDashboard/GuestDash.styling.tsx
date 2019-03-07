import styled from '@emotion/styled';

 export const StyledGuestDashboard = styled('div')`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  //border: 1px solid green;
  h1 {
     font-family: 'Roboto Medium',Arial,sans-serif;
     font-size: 2.5rem;
     text-align: left;
  }
  @media only screen and (max-width: 900px) {
  
  }
`;

export const GuestInfoWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 90%;
  background-color: white;
  margin: 0 0 1rem 1rem;
  padding: 0 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .guest-info {
      display: flex;
      //width: 80%;
      //border: 2px solid orange;
        img {
            justify-self: center;
            align-self: center;
            height: 80%;
            width: auto;
          
        }
        div {
            text-align: left;
            display: block;
            margin-left: 2rem;
            //border: 1px solid green;
        }
  }
 
`;
export const CheckIn = styled('div')`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-right: 2rem;
    //border: 1px solid red;

        .check-in {
            background-color: white;
            width: 35%;
            //text-align: center;
            border: 1px solid rgba(0, 0, 0, 0.2);

            .in {
                    font-family: 'Roboto Medium',Arial,sans-serif;
                    color: var(--color-text-accent);
                    font-size: 1.5rem;
                    margin: .5rem 0;
            }
            .date {
                font-family: 'Roboto Light',Arial,sans-serif;
                font-size: 1rem;
                color: var(--color-text-dark);
            }
        }
       
`;