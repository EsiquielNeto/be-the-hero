import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 14px Roboto, sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        transition: background 1s ease 0s, transform 1s ease 0s;
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea {
        font: 400 18px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    form input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
    }

    form textarea {
        width: 100%;
        min-height: 140px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        padding: 16px 24px;
        line-height: 24px;
        resize: vertical;
    }

    .button {
        width: 100%;
        height: 60px;
        background-color: #e02141;
        border: 0;
        border-radius: 8px;
        color: #FFF;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        transition: filter 0.2s;
    }

    .button:hover {
        filter: brightness(90%);
    }

    .back-link {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: ${({ theme }) => theme.colors.text};
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
    }

    .back-link svg {
        margin-right: 8px;
    }

    .back-link:hover {
        opacity: 0.8s;
    }

`;