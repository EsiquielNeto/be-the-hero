import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
    flex: 1;
    paddingHorizontal: 24px;
    paddingTop: ${Constants.statusBarHeight + 20 + 'px'}
`;

export const Header = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center
`;

export const HeaderText = styled.Text`
    fontSize: 15px;
    color: #737380
`;

export const HeaderTextBold = styled.Text`
    fontWeight: bold
`;

export const Title = styled.Text`
    fontSize: 30px;
    marginBottom: 16px;
    marginTop: 48px;
    color: #13131a;
    fontWeight: bold
`;

export const Description = styled.Text`
    fontSize: 16px;
    lineHeight: 24px;
    color: #737380
`;

export const IncidentList = styled.View`
    marginTop: 32px;
`;

export const Incident = styled.View`
    padding: 24px;
    borderRadius: 8px;
    backgroundColor: #FFF;
    marginBottom: 16px;
`;

export const IncidentProperty = styled.Text`
    fontSize: 14px;
    color: #41414d;
    fontWeight: bold;
`;

export const IncidentValue = styled.Text`
    marginTop: 8px;
    marginBottom: 24px;
    fontSize: 15px;
    color: #737390
`;

export const DetailButton = styled.TouchableOpacity`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

export const DetailsButtonText = styled.Text`
    color: #E20401;
    fontSize: 15px;
    fontWeight bold;
`;