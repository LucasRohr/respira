import { useCallback, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import Ionicons from "@expo/vector-icons/Ionicons";

import type { ICommorbidity } from "@/interfaces";
import { COLORS, COMMORBIDITY_SEVERITY } from "@/constants";

import type { CommorbiditiesFormProps } from "./types";
import { styles } from "./styles";
import { COMMORBIDITIES_FORM_STRINGS } from "./strings";

export const CommorbiditiesForm = ({
  commorbidities,
  onAddCommorbidity,
  onRemoveCommorbidity,
  onUpdateCommorbidity,
}: CommorbiditiesFormProps) => {
  const COMMORBIDITIES_OPTIONS = useMemo(
    () => [
      {
        label: "Asma",
        value: "123A:Asma",
      },
      {
        label: "Rinite",
        value: "123B:Rinite",
      },
      {
        label: "Sinusite",
        value: "123C:Sinusite",
      },
    ],
    []
  );

  const onUpdateName = useCallback(
    (nameData: string, commorbidity: ICommorbidity, index: number) => {
      const splitNameData = nameData.split(":");

      const newData: ICommorbidity = {
        ...commorbidity,
        cid: splitNameData[0],
        name: splitNameData[1],
      };

      onUpdateCommorbidity(newData, index);
    },
    [onUpdateCommorbidity]
  );

  const onUpdateSeverity = useCallback(
    (severityData: string, commorbidity: ICommorbidity, index: number) => {
      const newData: ICommorbidity = {
        ...commorbidity,
        severity: severityData,
      };

      onUpdateCommorbidity(newData, index);
    },
    [onUpdateCommorbidity]
  );

  const renderCommorbidities = useCallback(() => {
    return commorbidities.map((commorbidity, index) => {
      const { cid, name, severity } = commorbidity;
      const nameValue = `${cid}:${name}`;

      return (
        <View key={index} style={styles.commorbidityContainer}>
          <View style={styles.dropdownsContainer}>
            <View style={styles.dropdownWrapper}>
              <Dropdown
                error={!cid && !name}
                menuContentStyle={styles.dropdownMenuContent}
                label={COMMORBIDITIES_FORM_STRINGS.NAME_LABEL}
                placeholder={COMMORBIDITIES_FORM_STRINGS.NAME_PLACEHOLDER}
                options={COMMORBIDITIES_OPTIONS}
                value={nameValue}
                onSelect={(value) =>
                  onUpdateName(value ?? "", commorbidity, index)
                }
              />
            </View>
            <View style={styles.dropdownWrapper}>
              <Dropdown
                error={!severity}
                menuContentStyle={styles.dropdownMenuContent}
                label={COMMORBIDITIES_FORM_STRINGS.SEVERITY_LABEL}
                placeholder={COMMORBIDITIES_FORM_STRINGS.SEVERITY_PLACEHOLDER}
                options={COMMORBIDITY_SEVERITY}
                value={severity}
                onSelect={(value) =>
                  onUpdateSeverity(value ?? "", commorbidity, index)
                }
              />
            </View>
          </View>

          {commorbidities.length > 1 && (
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => onRemoveCommorbidity(index)}
            >
              <Ionicons
                name="trash-sharp"
                size={20}
                color={COLORS.background}
              />
            </TouchableOpacity>
          )}
        </View>
      );
    });
  }, [commorbidities, onRemoveCommorbidity, onUpdateName, onUpdateSeverity]);

  const renderAddButton = useCallback(() => {
    if (!commorbidities.length) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.addButton} onPress={onAddCommorbidity}>
        <Ionicons name="add-sharp" size={24} color={COLORS.background} />
      </TouchableOpacity>
    );
  }, [commorbidities]);

  return (
    <View style={styles.container}>
      {renderCommorbidities()}
      {renderAddButton()}
    </View>
  );
};
