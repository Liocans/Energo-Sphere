package com.PDLB.PPE.graphic;
import com.PDLB.PPE.graphic.model.LoginInfo;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.fxml.Initializable;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.image.Image;
import javafx.scene.input.Clipboard;
import javafx.scene.input.ClipboardContent;
import javafx.scene.input.MouseButton;
import javafx.stage.Stage;
import java.net.URL;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.ResourceBundle;

/**
 * This class represents a login list interface.
 */
public class LoginList implements Initializable{

    public static boolean isDisplay = false;

    public static Stage popupwindow;

    @FXML
    private TableView logList;

    public static Map<String, String> logins = new LinkedHashMap<String,String>(){{
        put("Aspiravi Energy", "Provider");
        put("DATS 24", "Provider");
        put("Ebem", "Provider");
        put("Eneco", "Provider");
        put("Energie.be", "Provider");
        put("Engie", "Provider");
        put("Luminus", "Provider");
        put("Mega", "Provider");
        put("Octa", "Provider");
        put("TotalEnergies", "Provider");
        put("AIEC", "Provider");
        put("AIEM", "Provider");
        put("CIESAC", "Provider");
        put("CILE", "Provider");
        put("IDEN", "Provider");
        put("IEG", "Provider");
        put("INASEP", "Provider");
        put("SWDE", "Provider");
        put("Falafel.Thierry@JeSuisNul.com", "Customer");
        put("Monsieur.Inspecteru@JeParleTrop.com", "Customer");
        put("Gatta.Nicolas@TuMeTrouverasPas.com", "Customer");
        put("Vancauwenberghe.Emelien@JeSuisCaché.com", "Customer");
    }};

    /**
     * Displays the login window.
     *
     * @throws Exception if an error occurs while loading the login window FXML.
     */
    public void display() throws Exception {
        if (!isDisplay) {
            popupwindow = new Stage();
            popupwindow.setTitle("Energo Sphere Logins");
            popupwindow.getIcons().add(new Image(getClass().getResourceAsStream("/logo/logo.png")));
            popupwindow.setResizable(false);
            popupwindow.setOnCloseRequest(e -> {
                closeWindow();
            });
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/fxml/login-list-view.fxml"));
            Parent root = loader.load();
            popupwindow.setScene(new Scene(root));
            popupwindow.show();
            isDisplay = true;
        } else {
            setWindowToFront();
        }
    }

    /**
     * Sets the login window to the front.
     */
    public void setWindowToFront(){
        popupwindow.setAlwaysOnTop(true);
        popupwindow.setAlwaysOnTop(false);
    }

    /**
     * Closes the login window.
     */
    public void closeWindow(){
        popupwindow.close();
        isDisplay = false;
    }

    /**
     * Initializes the table view and populates it with login information.
     *
     * @param location  The location used to resolve relative paths for the root object.
     * @param resources The resources used to localize the root object.
     */
    @Override
    public void initialize(URL location, ResourceBundle resources) {
        TableColumn<LoginInfo, String> column1 =
                new TableColumn<>("Username");

        column1.setCellValueFactory(
                new PropertyValueFactory<>("username"));
        column1.setSortable(false);

        TableColumn<LoginInfo, String> column2 =
                new TableColumn<>("Password");

        column2.setCellValueFactory(
                new PropertyValueFactory<>("Password"));
        column2.setSortable(false);

        logList.getColumns().add(column1);
        logList.getColumns().add(column2);

        column1.prefWidthProperty().bind(logList.widthProperty().multiply(0.7));
        column2.prefWidthProperty().bind(logList.widthProperty().multiply(0.25));

        column1.setResizable(false);
        column2.setResizable(false);

        // Iterate over the map and add LoginInfo objects to the data list
        for (Map.Entry<String, String> entry : logins.entrySet()) {
            String username = entry.getKey();
            String password = entry.getValue();
            logList.getItems().add(new LoginInfo(username, password));
        }

        logList.setRowFactory(tv -> {
            TableRow<LoginInfo> row = new TableRow<>();

            row.setOnMouseClicked(event -> {
                if (!row.isEmpty() && event.getButton() == MouseButton.PRIMARY && event.getClickCount() == 2) {
                    String content = row.getItem().toString();
                    ClipboardContent clipboardContent = new ClipboardContent();
                    clipboardContent.putString(content);
                    Clipboard.getSystemClipboard().setContent(clipboardContent);
                }
            });
            return row;
        });
    }
}

