import styled from 'styled-components';

export const Header = styled.div`
    height: 60px;
    background: ${({ theme }) => theme.colors.header};
    color: '#333';
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;