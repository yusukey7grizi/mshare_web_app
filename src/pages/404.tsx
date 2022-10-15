import React, { FC } from 'react';
import { Bar } from 'components/organisms';
import { ErrorContent } from 'components/organisms/errorContent';

const Custom404: FC = () => {
  return (
    <>
      <Bar />
      <ErrorContent
        title='404 Not Found'
        subtitle='お探しのページが見つかりませんでした'
      />
    </>
  );
};

export default Custom404;
