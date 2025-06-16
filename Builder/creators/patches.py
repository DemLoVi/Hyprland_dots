import os

class PatchSystemBugs:
    @staticmethod
    def enable_all_patches():
        PatchSystemBugs.__make_fish_the_default()
        PatchSystemBugs.__assign_permissions_to_configs()

    @staticmethod
    def __assign_permissions_to_configs():
        os.system("sudo chmod -R 700 ~/.config/*")

    @staticmethod
    def __make_fish_the_default():
        os.system("chsh -s /usr/bin/fish")
