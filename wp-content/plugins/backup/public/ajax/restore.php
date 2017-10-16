<?php
    require_once(dirname(__FILE__).'/../boot.php');
    require_once(SG_BACKUP_PATH.'SGBackup.php');
    if(backupGuardIsAjax() && count($_POST))
    {
        $error = array();
        try
        {
            //Getting Backup Name
            $backupName = $_POST['bname'];
            $restoreMode = isset($_POST['type'])? $_POST['type'] : SG_RESTORE_MODE_FULL; //if type is not set that means it is an old backup and no selective restore is available. only full
            $backup = new SGBackup();
            $backup->restore($backupName, $restoreMode);
        }
        catch(SGException $exception)
        {
            array_push($error, $exception->getMessage());
            die(json_encode($error));
        }
    }
