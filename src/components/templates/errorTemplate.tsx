import React, { FC } from 'react';
import { Bar } from 'components/organisms';
import { ErrorContent } from 'components/organisms/errorContent';

const ErrorPage: FC = () => {
  return (
    <>
      <Bar />
      <ErrorContent
        title='500 Internal Server Error'
        subtitle='アクセスしようとしたページは表示できませんでした'
      />
    </>
  );
};

export { ErrorPage };
