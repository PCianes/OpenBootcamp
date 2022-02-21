import React from "react";
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

function Updater(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  return (
    <>
      {newServiceWorkerDetected && (
        <div style={{ backgroundColor: 'tomato', marginBottom: 20 }}>
          <h3>New App version</h3>
          <button onClick={onLoadNewServiceWorkerAccept}>¡Update now!</button>
        </div>
      )}
    </>
  )
}

export default withServiceWorkerUpdater(Updater)