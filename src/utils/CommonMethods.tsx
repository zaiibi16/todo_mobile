import moment from 'moment';
import { useTranslation } from 'react-i18next';
import {
  Linking,
  PermissionsAndroid,
  Platform,
  Text,
  View,
} from 'react-native';
import {
  notificationListener,
  requestUserPermission,
} from '~services/notifications/NotificationsServices';
import Colors from '~theme/Colors';

export const extractInitials = (name: string) => {
  const words = name?.split(' ');
  const initials = words?.map(word => word.charAt(0).toUpperCase());
  return initials?.join('');
};

export const convertTime = (time: number | string) => {
  const { t } = useTranslation();
  const currentDate = moment();
  const inputDate = moment(time);

  const diffInSeconds = currentDate.diff(inputDate, 'seconds');
  const diffInMinutes = currentDate.diff(inputDate, 'minutes');
  const diffInHours = currentDate.diff(inputDate, 'hours');
  const diffInDays = currentDate.diff(inputDate, 'days');
  const diffInWeeks = currentDate.diff(inputDate, 'weeks');
  const diffInMonths = currentDate.diff(inputDate, 'months');
  const diffInYears = currentDate.diff(inputDate, 'years');

  if (diffInSeconds < 30) {
    return `${t('commonMethods.justNow')}`;
  } else if (diffInSeconds < 60) {
    return `${diffInSeconds} ${
      diffInSeconds !== 1
        ? t('commonMethods.seconds')
        : t('commonMethods.second')
    } ${t('commonMethods.ago')}`;
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} ${
      diffInMinutes !== 1
        ? t('commonMethods.minutes')
        : t('commonMethods.minute')
    } ${t('commonMethods.ago')}`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${
      diffInHours !== 1 ? t('commonMethods.hours') : t('commonMethods.hour')
    } ${t('commonMethods.ago')}`;
  } else if (diffInDays < 7) {
    return `${diffInDays} ${
      diffInDays !== 1 ? t('commonMethods.days') : t('commonMethods.day')
    } ${t('commonMethods.ago')}`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} ${
      diffInWeeks !== 1 ? t('commonMethods.weeks') : t('commonMethods.week')
    } ${t('commonMethods.ago')}`;
  } else if (diffInMonths < 12) {
    return `${diffInMonths} ${
      diffInMonths !== 1 ? t('commonMethods.months') : t('commonMethods.month')
    } ${t('commonMethods.ago')}`;
  } else {
    return `${diffInYears} ${
      diffInYears !== 1 ? t('commonMethods.years') : t('commonMethods.year')
    } ${t('commonMethods.ago')}`;
  }
};

export const notificationsInit = async () => {
  if (Platform.OS === 'android') {
    try {
      const res = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  requestUserPermission();
  notificationListener();
};

// export const HyperlinkText = ({ text, textStyle, linkStyle }) => {
//   const urlRegex = /(https?:\/\/[^\s]+)/g;
//   const parts = text.split(urlRegex);

//   return (
//     <Text style={textStyle}>
//       {parts.map((part, index) => {
//         if (part.match(urlRegex)) {
//           return (
//             <Text
//               key={index}
//               style={linkStyle}
//               onPress={() => Linking.openURL(part)}>
//               {part}
//             </Text>
//           );
//         } else {
//           return <Text key={index}>{part}</Text>;
//         }
//       })}
//     </Text>
//   );
// };

export const HyperlinkText = ({ text, textStyle, linkStyle }) => {
  const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[^\s]*#[^\s]*)/g;
  const parts = text?.split(urlRegex);
  const urls = text?.match(urlRegex) || [];

  const renderTextPart = (part, isUrl = false) => {
    if (isUrl) {
      const prefixedUrl = part?.startsWith('http') ? part : `https://${part}`;
      return (
        <Text
          key={part}
          style={[
            linkStyle,
            { textDecorationLine: 'underline', color: Colors.primaryBlue },
          ]}
          onPress={() => Linking.openURL(prefixedUrl)}>
          {part}
        </Text>
      );
    } else {
      return (
        <Text style={textStyle} key={part}>
          {part}
        </Text>
      );
    }
  };

  return (
    <Text>
      {parts?.map((part, index) => {
        const isUrl = urls?.includes(part);
        return renderTextPart(part, isUrl);
      })}
    </Text>
  );
};
