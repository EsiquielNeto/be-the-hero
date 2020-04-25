import srtled from 'styled-components/native';
import Constants from 'expo-constants';
import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    paddingHorizontal: 24px
    paddingTop: ${ Constants.statusBarHeight + 20 + 'px'};
`;

export const Header = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
`;

export const Incident = styled.View`
    padding: 24px
    borderRadius: 8px;
    backgroundColor: #FFF;
    marginBottom: 16px;
    marginTop: 48px;
`;

export const IncidentProperty = styled.Text`
    fontSize: 14px;
    color: #41414d;
    fontWeight: bold;
    marginTop: 24px;
`;

export const IncidentValue = styled.Text`
    marginTop: 8px;
    fontSize: 15px;
    color: #737380;
`;

export const ContactBox = styled.View`
    padding: 24px
    borderRadius: 8px;
    backgroundColor: #FFF;
    marginBottom: 16px;
`;

export const HeroTitle = styled.Text`
    fontWeight: bold;
    fontSize: 20px;
    color: #13131a;
    lineHeight: 30px;
`

export const HeroDescription = styled.Text`
    fontSize: 15px;
    color: #737380;
    marginTop: 16px
`;

export const Actions = styled.View`
    marginTop: 16px;
    flexDirection: row;
    justifyContent: space-between;
`;

export const Action = styled.TouchableOpacity`
    backgroundColor: #E02041;
    borderRadius: 8px;
    height: 50;
    width: 48%;
    justifyContent: center;
    alignItems: center;
`;

export const ActionText = styled.Text`
    color: #FFF
    fontSize: 15px
    fontWeight: bold;
`;
