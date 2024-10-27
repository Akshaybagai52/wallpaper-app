import React, { useCallback, useRef } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

type BottomSheetProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheetNav = ({ onClose, children }: BottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["25%", "50%", "90%"]}
      enablePanDownToClose
    >
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
};

export default BottomSheetNav;
