import styled from 'styled-components';

export const NewIncidentContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100%;
    padding: 96px;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.content};
    box-shadow: 0 0 100px ${({ theme }) => theme.colors.shadow};
    transition: background 1s ease 0s, transform 1s ease 0s;

    display: flex;
    justify-content: space-between;
    align-items: center;

    section {
        width: 100%;
        max-width: 380px;
    }

    section h1 {
        color: ${({ theme }) => theme.colors.colors.text};
        margin: 64px 0 32px;
        font-size: 32px;
        transition: color 1s ease 0s, transform 1s ease 0s;
    }

    section p {
        font-size: 18px;
        color: #737380;
        line-height: 32px;
    }

    form {
        width: 100%;
        max-width: 450px;
    }

    form input,
    form textarea {
        margin-top: 8px;
    }
`;