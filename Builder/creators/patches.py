import os

class PatchSystemBugs:
    @staticmethod
    def enable_all_patches():
        PatchSystemBugs.__assign_permissions_to_configs()

    @staticmethod
    def __assign_permissions_to_configs():
        os.system("sudo chmod -R 700 ~/.config/*")
